import * as React from "react";
import { render } from "react-dom";
import ReactKanban from "react-kanban-dnd";
import { InfoWrapper, Label, RowWrapper, Title, Value, Wrapper } from "./kanban.s";

const columns = [
  {
    id: "column1",
    title: "Column 1",
    rows: [
      {
        id: "children1",
        name: "John",
        age: "21",
      },
      {
        id: "children2",
        name: "Alex",
        age: "33",
      },
    ],
  },
  {
    id: "column2",
    title: "Column 2",
    rows: [
      {
        id: "children3",
        name: "Michael",
        age: "29",
      },
      {
        id: "children4",
        name: "Carl",
        age: "26",
      },
    ],
  },
];

const renderCard = (row) => (
  <RowWrapper>
    <InfoWrapper>
      <Label>Name:</Label>
      <Value>{row.name}</Value>
    </InfoWrapper>
    <InfoWrapper>
      <Label>Age:</Label>
      <Value>{row.age}</Value>
    </InfoWrapper>
  </RowWrapper>
);

function Kanban(props) {
  return (
    <Wrapper>
      <Title>React Kanban live demo</Title>
      <ReactKanban
        columns={columns}
        renderCard={renderCard}
        onDragEnd={() => {}}
        // cardWrapperStyle={}
        // columnStyle={}
        // columnHeaderStyle={}
      />
    </Wrapper>
  );
}

export default Kanban;
