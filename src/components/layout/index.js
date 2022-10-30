import React, { memo, useMemo, lazy, Suspense } from "react";
import { Loading } from "../shared";
import { useSelector } from "react-redux";

import {
  LAYOUT_TYPE_CLASSIC,
  LAYOUT_TYPE_MODERN,
  LAYOUT_TYPE_SIMPLE,
  LAYOUT_TYPE_STACKED_SIDE,
  LAYOUT_TYPE_DECKED,
  LAYOUT_TYPE_BLANK,
} from "../../constants/theme.constant";
