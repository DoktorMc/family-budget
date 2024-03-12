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

const OptionComponent = ({ ...props }) => {
  const { data } = props;
  return (
    <>
      <span>{data.name}</span>
      <span>{data.type }</span>
    </>
  );
};

const DashboardPage = () => {
  return (
    <div>
      DASHBOARD PAGE
      <CustomSelector data={testItemsForSelect} forGroup='type' options={OptionComponent} />
    </div>
  );
};

export default DashboardPage;
