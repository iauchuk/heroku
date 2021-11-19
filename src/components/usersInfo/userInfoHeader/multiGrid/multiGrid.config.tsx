import { isPresent } from "../../../../helpers/helpers";
import * as _ from "lodash";
import React from "react";
import { useSelector } from "react-redux";
import { StoreStateInterface } from "../../../../interfaces/storeStateInterface/storeStateInterface";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MultiGrid, AutoSizer } from "react-virtualized";
import { EditBlock } from "../../../editBlock/editBlock";

interface MultiGridConfigInterface {
  editUserItem: any;
  deleteUserItem: any;
  styled: any;
}

const MultiGridConfig = (props: MultiGridConfigInterface) => {
  const { styled, editUserItem, deleteUserItem } = props;

  const userInfoList = useSelector(
    (state: StoreStateInterface) => state?.users?.usersList
  );
  const headercolumns = [
    { name: "name", displayName: "Name", width: 120 },
    { name: "surname", displayName: "Surname", width: 80 },
    { name: "role", displayName: "Role", width: 120 },
    { name: "id", displayName: "id", width: 120 },
    { name: "action", displayName: "Action", width: 400 },
  ];

  const rowHeight = 40;

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

      rowsList.push();

      if (
        !isPresent(rowsList) ||
        !isPresent(rowsList[rowIndex]) ||
        !isPresent(rowsList[rowIndex][columnIndex])
      ) {
        return "";
      }

      if (columnIndex === headercolumns.length - 1) {
        return (
          <div key={key} style={style}>
            <EditBlock
              primaryEvent={() => {
                editUserItem(userInfoList[rowIndex]?.id);
              }}
              secondaryEvent={() => {
                deleteUserItem(userInfoList[rowIndex].id);
              }}
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
