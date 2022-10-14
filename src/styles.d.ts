import "styled-components";
import { CustomTheme } from "@/types/style";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {}
}
