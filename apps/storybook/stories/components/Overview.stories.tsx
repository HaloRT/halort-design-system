import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import {
  Badge,
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Select,
  Modal,
  Drawer,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  Avatar,
  Tabs,
  Stepper,
} from "@halort/web";
import { Button } from "@halort/web";

const meta: Meta = { title: "Components/Overview" };
export default meta;
type Story = StoryObj;

export const BadgeVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="alt">Alt</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  ),
};

export const CardExample: Story = {
  render: () => (
    <Card className="max-w-md">
      <CardHeader>
        <CardTitle>Community Portal</CardTitle>
        <CardDescription>Multi-tenant SaaS for residential communities.</CardDescription>
      </CardHeader>
    </Card>
  ),
};

export const FormControls: Story = {
  render: () => (
    <div className="grid max-w-md gap-4">
      <Input label="Nama Warga" placeholder="Masukkan nama" />
      <Select
        label="Jenis Komunitas"
        options={[
          { value: "rt", label: "RT / RW" },
          { value: "cluster", label: "Cluster" },
          { value: "apartment", label: "Apartemen" },
        ]}
      />
    </div>
  ),
};

export const ModalExample: Story = {
  render: () => (
    <Modal
      title="Konfirmasi Pembayaran"
      description="Apakah Anda yakin ingin melanjutkan pembayaran iuran?"
      trigger={<Button>Open Modal</Button>}
    >
      <div className="flex justify-end gap-2">
        <Button variant="secondary">Batal</Button>
        <Button>Lanjutkan</Button>
      </div>
    </Modal>
  ),
};

export const DrawerExample: Story = {
  render: function DrawerDemo() {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Detail Warga">
          <p className="text-muted">Informasi lengkap warga dan rumah tangga.</p>
        </Drawer>
      </>
    );
  },
};

export const TableExample: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Unit</TableHead>
          <TableHead>Nama</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>A-12</TableCell>
          <TableCell>Budi Santoso</TableCell>
          <TableCell>Aktif</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>B-05</TableCell>
          <TableCell>Siti Aminah</TableCell>
          <TableCell>Aktif</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const AvatarExample: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar alt="Budi Santoso" fallback="BS" size="sm" />
      <Avatar alt="Siti Aminah" fallback="SA" />
      <Avatar alt="HaloRT" fallback="HR" size="lg" />
    </div>
  ),
};

export const TabsExample: Story = {
  render: () => (
    <Tabs
      defaultValue="warga"
      items={[
        { value: "warga", label: "Warga", content: <p>Daftar warga terdaftar.</p> },
        { value: "iuran", label: "Iuran", content: <p>Tagihan iuran bulanan.</p> },
        { value: "aduan", label: "Aduan", content: <p>Pengaduan warga.</p> },
      ]}
    />
  ),
};

export const StepperExample: Story = {
  render: () => (
    <Stepper
      steps={["Data Diri", "Rumah Tangga", "Verifikasi", "Selesai"]}
      currentStep={1}
    />
  ),
};
