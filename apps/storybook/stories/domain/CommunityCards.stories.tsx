import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ResidentCard,
  HouseholdCard,
  VisitorPassCard,
  AnnouncementCard,
  FacilityBookingCard,
  CommunityFundraisingCard,
  SecurityIncidentCard,
  MaintenanceRequestCard,
  PollingCard,
  VotingCard,
} from "@halort/web";

const meta: Meta = { title: "Domain/Community Cards" };
export default meta;
type Story = StoryObj;

export const AllCards: Story = {
  render: () => (
    <div className="grid gap-4 md:grid-cols-2">
      <ResidentCard name="Budi Santoso" unit="A-12" role="Ketua RT" />
      <HouseholdCard
        householdId="KK-001"
        headOfHousehold="Budi Santoso"
        members={4}
        address="Golden Park 2, Blok A No. 12"
      />
      <VisitorPassCard
        visitorName="Andi Wijaya"
        hostUnit="A-12"
        validUntil="2026-06-15"
        status="approved"
      />
      <AnnouncementCard
        title="Rapat Warga Bulanan"
        excerpt="Rapat warga RT 10 akan dilaksanakan Sabtu depan pukul 19:00 WIB."
        publishedAt="2026-06-01"
        author="Pengurus RT"
      />
      <FacilityBookingCard
        facilityName="Lapangan Basket"
        date="2026-06-20"
        timeSlot="08:00 - 10:00"
      />
      <CommunityFundraisingCard
        campaignName="Renovasi Taman"
        targetAmount={50000000}
        raisedAmount={32500000}
        deadline="2026-08-01"
      />
      <SecurityIncidentCard
        incidentType="Kendaraan mencurigakan"
        location="Gate Utama"
        reportedAt="2026-06-08"
        severity="medium"
      />
      <MaintenanceRequestCard
        title="Lampu jalan mati"
        category="Infrastruktur"
        status="in-progress"
        submittedAt="2026-06-07"
      />
      <PollingCard
        question="Setuju renovasi pos satpam?"
        totalVotes={42}
        endsAt="2026-06-30"
      />
      <VotingCard
        agendaTitle="Pemilihan Ketua RT"
        options={["Budi Santoso", "Siti Aminah", "Abstain"]}
        deadline="2026-07-01"
      />
    </div>
  ),
};
