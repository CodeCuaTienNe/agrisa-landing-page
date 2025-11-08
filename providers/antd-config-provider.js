"use client";

import { ConfigProvider } from "antd";

export default function AntdConfigProvider({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#18573f",
          colorBgContainer: "#fefcf5",
          borderRadius: 6,
          fontSize: 14,
        },
        components: {
          Button: {
            borderRadius: 6,
            controlHeight: 36,
          },
          Input: {
            borderRadius: 6,
            controlHeight: 36,
          },
          Card: {
            borderRadius: 8,
          },
          Modal: {
            borderRadius: 8,
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
