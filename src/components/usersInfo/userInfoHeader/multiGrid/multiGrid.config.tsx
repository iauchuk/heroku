import { isPresent } from "../../../../helpers/helpers";
import * as _ from "lodash";
import React, { ChangeEvent, useState } from "react";
import { useSelector } from "react-redux";
import { StoreStateInterface } from "../../../../interfaces/storeStateInterface/storeStateInterface";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MultiGrid, AutoSizer } from "react-virtualized";
import { Checkbox } from "@mui/material";

interface MultiGridConfigInterface {
  editUserItem?: any;
  deleteUserItem?: any;
  styled?: any;
  handleCheckbox?: any;
}

const MultiGridConfig = (props: MultiGridConfigInterface) => {
  const { styled, handleCheckbox } = props;
  const headercolumns = [
    { name: "check", displayName: "check", width: 100 },
    { name: "name", displayName: "Name", width: 400 },
    { name: "surname", displayName: "Surname", width: 480 },
    { name: "role", displayName: "Role", width: 420 },
    { name: "id", displayName: "id", width: 420 },
    { name: "action", displayName: "Action", width: 400 },
  ];
  const rowHeight = 40;
  const userInfoList = useSelector(
    (state: StoreStateInterface) => state?.users?.usersList
  );

  const initialState = userInfoList.reduce(
    (state: any, current: { id: any }) =>
      Object.assign(state, { [current.id]: false }),
    {}
  );
  const [checkboxStatus, setCheckboxStatus] = useState(initialState);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    userId: number
  ) => {
    const { checked } = event.target;
    handleCheckbox(userId);
    setCheckboxStatus((prevState: any) => ({
      ...prevState,
      [userId]: checked,
    }));
  };

  const rowCountRenderer = () => {
    if (!isPresent(userInfoList)) {
      return 0;
    }
    return userInfoList.length;
  };

  const renderHeaderColumns = (columnIndex: any) => {
    const currentColumn = headercolumns[columnIndex];
    return <div key={currentColumn.name}>{currentColumn.displayName}</div>;
  };

  const cellRenderer = ({ columnIndex, key, rowIndex, style }: any) => {
    if (!isPresent(userInfoList)) {
      return;
    }

    if (rowIndex === 0) {
      return (
        <div key={key} style={style}>
          {renderHeaderColumns(columnIndex)}
        </div>
      );
    } else {
      const rowsList = _.map(userInfoList, (item) => {
        return _.values(item);
      });

      if (
        !isPresent(rowsList) ||
        !isPresent(rowsList[rowIndex]) ||
        !isPresent(rowsList[rowIndex][columnIndex])
      ) {
        return "";
      }

      if (columnIndex === 0) {
        return (
          <div key={key} style={style}>
            <Checkbox
              checked={checkboxStatus[userInfoList[rowIndex].id]}
              onChange={(event) =>
                handleChange(event, userInfoList[rowIndex].id)
              }
            />
          </div>
        );
      }

      return (
        <div key={key} style={style}>
          {rowsList ? rowsList[rowIndex][columnIndex] : undefined}
        </div>
      );
    }
  };

  const heightRenderer = () => {
    if (!isPresent(userInfoList)) {
      return 0;
    }
    return userInfoList.length * rowHeight;
  };

  return (
    <AutoSizer>
      {({ width }: any) => (
        <MultiGrid
          cellRenderer={cellRenderer}
          classNameTopLeftGrid={styled.topLeftGrid}
          classNameTopRightGrid={styled.topRightGrid}
          classNameBottomLeftGrid={styled.bottomLeftGrid}
          classNameBottomRightGrid={styled.bottomRightGrid}
          className={styled.defaultGridStyle}
          fixedColumnCount={1}
          fixedRowCount={1}
          height={heightRenderer()}
          width={width}
          columnCount={headercolumns.length}
          columnWidth={({ index }: any) => headercolumns[index].width}
          rowCount={rowCountRenderer()}
          rowHeight={rowHeight}
        />
      )}
    </AutoSizer>
  );
};

export default MultiGridConfig;
