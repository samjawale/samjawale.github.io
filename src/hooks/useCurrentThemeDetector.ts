import { ThemeKind } from "@/types/style";
import { useTheme } from "styled-components";

const useCurrentThemeDetector = () => {
  const currentTheme = useTheme();
  return currentTheme.kind === ThemeKind.DARK;
};

export default useCurrentThemeDetector;
