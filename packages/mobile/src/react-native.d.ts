declare module "react-native" {
  import * as React from "react";

  export interface ViewProps {
    style?: object | object[];
    children?: React.ReactNode;
  }

  export interface TextProps {
    style?: object | object[];
    children?: React.ReactNode;
  }

  export interface PressableProps {
    style?: object | object[];
    onPress?: () => void;
    children?: React.ReactNode;
  }

  export interface TextInputProps {
    style?: object | object[];
    placeholder?: string;
    placeholderTextColor?: string;
    value?: string;
    onChangeText?: (text: string) => void;
  }

  export const View: React.ComponentType<ViewProps>;
  export const Text: React.ComponentType<TextProps>;
  export const Pressable: React.ComponentType<PressableProps>;
  export const TextInput: React.ComponentType<TextInputProps>;
}
