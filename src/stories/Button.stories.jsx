import Button from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  label: "Button",
  backgroundColor: "red",
  size: "md",
};
export const Green = Template.bind({});
Green.args = {
  label: "Green",
  backgroundColor: "green",
  size: "lg",
};
