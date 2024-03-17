import React from "react";
import CustomSelector from "../../../../Custom/Selector/CustomSelector";

const testItemsForSelect = [
  {
    id: 1,
    some: {
      name: "test name1",
      type: "income",
    },
  },
  {
    id: 2,
    some: {
      name: "test name2",
      type: "expense",
    },
  },
  {
    id: 3,
    some: {
      name: "test name3",
      type: "income",
    },
  },
  {
    id: 4,
    some: {
      name: "test name4",
      type: "expense",
    },
  },
];

const testItemsForSelect1 = [
  {
    id: 1,
    name: "test 2 name 1",
  },
  {
    id: 2,
    name: "test 2 name 2",
  },
  {
    id: 3,
    name: "test 2 name 3",
  },
];

const OptionComponent = ({ onClick, ...props }) => {
  const { data } = props;
  console.log("DATA IN SELECTED COMP", data);
  return (
    <>
      <span onClick={() => onClick(data.id)}>{data.some.name}</span>
    </>
  );
};

const selectedComponent = (props) => {
  console.log("DATA IN SELECTED COMP", props);

  return <span>{props.some.name}</span>;
};

const DashboardPage = () => {
  return (
    <div>
      DASHBOARD PAGE
      <CustomSelector
        data={testItemsForSelect}
        forGroup="type"
        options={OptionComponent}
        selected={selectedComponent}
      />
    </div>
  );
};

export default DashboardPage;
