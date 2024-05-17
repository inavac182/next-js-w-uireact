"use client";

import React, { useCallback, useEffect, useState } from "react";

import { ThemeColor } from "@uireact/foundation";
import { UiView } from "@uireact/view";

import { CustomTheme } from './custom-theme';

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => {
  return (
    <UiView theme={CustomTheme} skipFontName>{children}</UiView>
  );
};
