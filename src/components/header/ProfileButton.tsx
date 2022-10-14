import { Button, ButtonProps } from "antd";
import { GithubOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";

type ProfileButtonProps = Pick<ButtonProps, "icon" | "href">;
const ProfileButton = (props: ProfileButtonProps) => <Button {...props} shape="circle" target="_blank" />;

export const LinkedInProfileBtn = () => (
  <ProfileButton icon={<LinkedinOutlined />} href="https://www.linkedin.com/in/jawalesumit/" />
);

export const GithubProfileBtn = () => <ProfileButton icon={<GithubOutlined />} href="https://github.com/samjawale" />;

export const YoutubeProfileBtn = () => (
  <ProfileButton icon={<YoutubeOutlined />} href="https://www.youtube.com/channel/UCF60X5gHAPTkvMb5XjIaHrA" />
);
