'use client';
import React from "react";

import { UiView } from "@uireact/view";

type ViewWrapperProps = {
  children: React.ReactNode;
};

export const ViewWrapper = ({ children }: ViewWrapperProps) => (
  <UiView>{children}</UiView>
);
