import * as React from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  type PressableProps,
  type TextInputProps,
  type ViewProps,
} from "react-native";
import { colors } from "@halort/tokens";

type ButtonVariant = "primary" | "secondary" | "outline";

const variantStyles: Record<
  ButtonVariant,
  { container: object; text: object }
> = {
  primary: {
    container: { backgroundColor: colors.primary, borderRadius: 12, padding: 14 },
    text: { color: "#ffffff", fontWeight: "600", textAlign: "center" },
  },
  secondary: {
    container: {
      backgroundColor: colors.secondary,
      borderRadius: 12,
      padding: 14,
    },
    text: { color: "#ffffff", fontWeight: "600", textAlign: "center" },
  },
  outline: {
    container: {
      borderWidth: 1,
      borderColor: colors.primary,
      borderRadius: 12,
      padding: 14,
    },
    text: { color: colors.primary, fontWeight: "600", textAlign: "center" },
  },
};

export function Button({
  title,
  variant = "primary",
  ...props
}: PressableProps & { title: string; variant?: ButtonVariant }) {
  const styles = variantStyles[variant];
  return (
    <Pressable style={styles.container} {...props}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

export function Input({
  label,
  ...props
}: TextInputProps & { label?: string }) {
  return (
    <View style={{ gap: 6 }}>
      {label ? <Text style={{ fontWeight: "500" }}>{label}</Text> : null}
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "#e5e7eb",
          borderRadius: 12,
          paddingHorizontal: 14,
          paddingVertical: 12,
        }}
        placeholderTextColor="#9ca3af"
        {...props}
      />
    </View>
  );
}

export function Card({ children, style, ...props }: ViewProps) {
  return (
    <View
      style={[
        {
          borderRadius: 16,
          borderWidth: 1,
          borderColor: "#e5e7eb",
          padding: 16,
          backgroundColor: "#ffffff",
        },
        style,
      ]}
      {...props}
    >
      {children}
    </View>
  );
}

export function ResidentCard({
  name,
  unit,
  role = "Warga",
}: {
  name: string;
  unit: string;
  role?: string;
}) {
  return (
    <Card>
      <Text style={{ fontSize: 16, fontWeight: "600" }}>{name}</Text>
      <Text style={{ color: "#6b7280", marginTop: 4 }}>{role} · Unit {unit}</Text>
    </Card>
  );
}

export function AnnouncementCard({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) {
  return (
    <Card>
      <Text style={{ fontSize: 12, color: colors.primary, fontWeight: "600" }}>
        PENGUMUMAN
      </Text>
      <Text style={{ fontSize: 16, fontWeight: "600", marginTop: 8 }}>{title}</Text>
      <Text style={{ color: "#6b7280", marginTop: 6 }}>{excerpt}</Text>
    </Card>
  );
}

export function NavigationBar({ title }: { title: string }) {
  return (
    <View
      style={{
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#e5e7eb",
        backgroundColor: "#ffffff",
      }}
    >
      <Text style={{ fontSize: 18, fontWeight: "700" }}>{title}</Text>
    </View>
  );
}

export function BottomSheet({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View
      style={{
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        backgroundColor: "#ffffff",
        padding: 20,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 12,
      }}
    >
      <View
        style={{
          width: 40,
          height: 4,
          borderRadius: 999,
          backgroundColor: "#d1d5db",
          alignSelf: "center",
          marginBottom: 16,
        }}
      />
      <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 12 }}>{title}</Text>
      {children}
    </View>
  );
}
