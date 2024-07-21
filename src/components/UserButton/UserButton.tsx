import { Avatar, Text, UnstyledButton } from "@mantine/core";
import { ArrowRight } from "lucide-react";
import { forwardRef } from "react";

interface UserButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  image: string;
  name: string;
  email: string;
  icon?: React.ReactNode;
}

const UserButton = forwardRef<HTMLButtonElement, UserButtonProps>(
  ({ image, name, email, icon, ...others }: UserButtonProps, ref) => (
    <UnstyledButton
      ref={ref}
      style={{
        padding: "var(--mantine-spacing-md)",
        color: "var(--mantine-color-text)",
        borderRadius: "var(--mantine-radius-sm)",
      }}
      {...others}
    >
      <div className="flex gap-4 justify-center items-center">
        <Avatar
          src={image}
          radius="xl"
        />

        <div className="flex flex-col">
          <span className="text-sm font-semibold">{name}</span>

          <Text className="text-xs">{email}</Text>
        </div>

        {icon || <ArrowRight size="1rem" />}
      </div>
    </UnstyledButton>
  )
);

export default UserButton;
