import { cn, formatCurrency, formatDate } from "@halort/utils";
import { Badge } from "../ui/badge.js";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card.js";
import { Avatar } from "../ui/avatar.js";

export function ResidentCard({
  name,
  unit,
  role = "Warga",
  avatarSrc,
  className,
}: {
  name: string;
  unit: string;
  role?: string;
  avatarSrc?: string;
  className?: string;
}) {
  return (
    <Card className={cn("", className)}>
      <div className="flex items-start gap-4">
        <Avatar src={avatarSrc} alt={name} fallback={name.slice(0, 2)} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <CardTitle>{name}</CardTitle>
            <Badge variant="outline">{role}</Badge>
          </div>
          <CardDescription className="mt-1">Unit {unit}</CardDescription>
        </div>
      </div>
    </Card>
  );
}

export function HouseholdCard({
  householdId,
  headOfHousehold,
  members,
  address,
  className,
}: {
  householdId: string;
  headOfHousehold: string;
  members: number;
  address: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{headOfHousehold}</CardTitle>
          <Badge>{householdId}</Badge>
        </div>
        <CardDescription>{address}</CardDescription>
      </CardHeader>
      <p className="text-sm text-muted">{members} anggota keluarga terdaftar</p>
    </Card>
  );
}

export function VisitorPassCard({
  visitorName,
  hostUnit,
  validUntil,
  status = "pending",
  className,
}: {
  visitorName: string;
  hostUnit: string;
  validUntil: Date | string;
  status?: "pending" | "approved" | "expired";
  className?: string;
}) {
  const statusVariant = {
    pending: "warning" as const,
    approved: "success" as const,
    expired: "outline" as const,
  }[status];

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{visitorName}</CardTitle>
          <Badge variant={statusVariant}>{status}</Badge>
        </div>
        <CardDescription>
          Kunjungan ke Unit {hostUnit} · Berlaku hingga {formatDate(validUntil)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function AnnouncementCard({
  title,
  excerpt,
  publishedAt,
  author,
  className,
}: {
  title: string;
  excerpt: string;
  publishedAt: Date | string;
  author: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <Badge variant="alt" className="mb-2 w-fit">
          Pengumuman
        </Badge>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{excerpt}</CardDescription>
      </CardHeader>
      <p className="text-xs text-muted">
        {author} · {formatDate(publishedAt)}
      </p>
    </Card>
  );
}

export function FacilityBookingCard({
  facilityName,
  date,
  timeSlot,
  status = "confirmed",
  className,
}: {
  facilityName: string;
  date: Date | string;
  timeSlot: string;
  status?: "confirmed" | "pending" | "cancelled";
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{facilityName}</CardTitle>
          <Badge variant={status === "confirmed" ? "success" : "warning"}>
            {status}
          </Badge>
        </div>
        <CardDescription>
          {formatDate(date)} · {timeSlot}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function CommunityFundraisingCard({
  campaignName,
  targetAmount,
  raisedAmount,
  deadline,
  className,
}: {
  campaignName: string;
  targetAmount: number;
  raisedAmount: number;
  deadline: Date | string;
  className?: string;
}) {
  const progress = Math.min(100, Math.round((raisedAmount / targetAmount) * 100));

  return (
    <Card className={className}>
      <CardHeader>
        <Badge className="mb-2 w-fit">Crowdfunding</Badge>
        <CardTitle>{campaignName}</CardTitle>
        <CardDescription>
          Target {formatCurrency(targetAmount)} · Deadline {formatDate(deadline)}
        </CardDescription>
      </CardHeader>
      <div className="space-y-2">
        <div className="h-2 overflow-hidden rounded-full bg-surface-muted">
          <div
            className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-sm font-medium text-foreground">
          {formatCurrency(raisedAmount)} terkumpul ({progress}%)
        </p>
      </div>
    </Card>
  );
}

export function SecurityIncidentCard({
  incidentType,
  location,
  reportedAt,
  severity = "medium",
  className,
}: {
  incidentType: string;
  location: string;
  reportedAt: Date | string;
  severity?: "low" | "medium" | "high";
  className?: string;
}) {
  const severityVariant = {
    low: "outline" as const,
    medium: "warning" as const,
    high: "danger" as const,
  }[severity];

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{incidentType}</CardTitle>
          <Badge variant={severityVariant}>{severity}</Badge>
        </div>
        <CardDescription>
          {location} · Dilaporkan {formatDate(reportedAt)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function MaintenanceRequestCard({
  title,
  category,
  status = "open",
  submittedAt,
  className,
}: {
  title: string;
  category: string;
  status?: "open" | "in-progress" | "resolved";
  submittedAt: Date | string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <Badge variant={status === "resolved" ? "success" : "default"}>
            {status}
          </Badge>
        </div>
        <CardDescription>
          {category} · {formatDate(submittedAt)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function PollingCard({
  question,
  totalVotes,
  endsAt,
  className,
}: {
  question: string;
  totalVotes: number;
  endsAt: Date | string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <Badge variant="outline" className="mb-2 w-fit">
          Polling
        </Badge>
        <CardTitle>{question}</CardTitle>
        <CardDescription>
          {totalVotes} suara · Berakhir {formatDate(endsAt)}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export function VotingCard({
  agendaTitle,
  options,
  deadline,
  className,
}: {
  agendaTitle: string;
  options: string[];
  deadline: Date | string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader>
        <Badge className="mb-2 w-fit">Voting RT/RW</Badge>
        <CardTitle>{agendaTitle}</CardTitle>
        <CardDescription>Deadline {formatDate(deadline)}</CardDescription>
      </CardHeader>
      <ul className="space-y-2">
        {options.map((option) => (
          <li
            key={option}
            className="rounded-lg border border-border bg-surface-muted px-3 py-2 text-sm text-foreground"
          >
            {option}
          </li>
        ))}
      </ul>
    </Card>
  );
}
