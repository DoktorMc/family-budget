import Box from "@mui/joy/Box";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import React from "react";
import CategoriesSettings from "../components/CategoriesSettings";
import "./SettingsPage.scss";

const SettingsPage = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        m: -2,
        overflowX: "hidden",
      }}
    >
      <Tabs
        aria-label="Pipeline"
        defaultValue={0}
        sx={{
          bgcolor: "#263238",
        }}
      >
        <TabList
          sx={{
            pt: 3,
            justifyContent: "center",

            [`&& .${tabClasses.root}`]: {
              flex: "initial",
              bgcolor: "transparent",
              transitionDuration: "0.5s",
              borderRadius: "10px",
              fontFamily: "comfortaaREG",
              marginRight: 2,
              "&:hover": {
                bgcolor: "transparent",
                color: "#1dd1a1",
                boxShadow: "0 0 20px #1dd1a1",
              },
              [`&.${tabClasses.selected}`]: {
                color: "#1dd1a1",
                "&::after": {
                  height: 2,
                  borderTopLeftRadius: 3,
                  borderTopRightRadius: 3,
                  bgcolor: "#1dd1a1",
                },
              },
            },
          }}
        >
          <Tab
            sx={{
              color: "#fbfbfd",
            }}
            indicatorInset
          >
            All Categories
          </Tab>
          <Tab
            sx={{
              color: "#fbfbfd",
            }}
            indicatorInset
          >
            Account
          </Tab>
          <Tab
            sx={{
              color: "#fbfbfd",
            }}
            indicatorInset
          >
            Wallet
          </Tab>
        </TabList>
        <Box
          sx={{
            background: "#37474f",
            mt: 2,
            height: "90vh",
          }}
        >
          <TabPanel value={0}>
            <CategoriesSettings />
          </TabPanel>
          <TabPanel value={1}>User</TabPanel>
          <TabPanel value={2}>Products</TabPanel>
        </Box>
      </Tabs>
    </Box>
  );
};

export default SettingsPage;
