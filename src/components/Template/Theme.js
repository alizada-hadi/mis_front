import { useSelector } from "react-redux";
import React from "react";
import ConfigProvider from "../ui/ConfigProvider";
import useDarkMode from "../../utils/hooks/useDarkMode";
import { themeConfig } from "../../configs/theme.config";

const Theme = (props) => {
  const theme = useSelector((state) => state.theme);
  const [isDark] = useDarkMode();

  const currentTheme = {
    mode: isDark ? "dark" : "light",
    ...themeConfig,
    ...theme,
  };

  return (
    <>
      <ConfigProvider value={currentTheme}>{props.children}</ConfigProvider>
    </>
  );
};

export default Theme;
