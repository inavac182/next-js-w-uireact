"use client";

import React, { useCallback, useEffect, useState } from "react";

import { DefaultTheme, ThemeColor } from "@uireact/foundation";
import { UiView } from "@uireact/view";

type ViewWrapperProps = {
  children: React.ReactNode;
};

const useThemeDetector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const mqListener = useCallback((e: MediaQueryListEvent) => {
    window.sessionStorage.removeItem("selectedTheme");
    setIsDarkTheme(e.matches);
  }, []);

  useEffect(() => {
    const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

    darkThemeMq.addEventListener("change", mqListener);

    return () => darkThemeMq.removeEventListener("change", mqListener);
  }, [mqListener]);

  useEffect(() => {
    setIsDarkTheme(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return isDarkTheme;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => {
  const isDarkTheme = useThemeDetector();
  const [selectedTheme, setSelectedTheme] = useState(
    isDarkTheme ? ThemeColor.dark : ThemeColor.light,
  );

  useEffect(() => {
    setSelectedTheme(isDarkTheme ? ThemeColor.dark : ThemeColor.light);
  }, [isDarkTheme]);

  useEffect(() => {
    const themeFromStorage = window.sessionStorage.getItem("selectedTheme");

    if (themeFromStorage !== null) {
      setSelectedTheme(themeFromStorage === ThemeColor.dark ? ThemeColor.dark : ThemeColor.light);
    }
  }, []);

  return (
    <UiView theme={DefaultTheme} selectedTheme={selectedTheme}>{children}</UiView>
  );
};
