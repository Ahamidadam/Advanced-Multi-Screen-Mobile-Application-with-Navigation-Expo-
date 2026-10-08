export type ActivityType = "mention" | "reply" | "reaction";

export type ActivityItem = {
  id: string;
  initials: string;
  avatarColor: string;
  title: string;
  preview: string;
  source: string;
  time: string;
  type: ActivityType;
  unread: boolean;
};

export const initialActivities: ActivityItem[] = [
  {
    id: "1",
    initials: "AL",
    avatarColor: "#E8CBDD",
    title: "Alex mentioned Everyone",
    preview: "This is a sample announcement for the group.",
    source: "Student Network",
    time: "4:53 PM",
    type: "mention",
    unread: false,
  },
  {
    id: "2",
    initials: "JT",
    avatarColor: "#CAD8ED",
    title: "Jordan mentioned you",
    preview: "Here is some example text for this notification.",
    source: "Database Group",
    time: "11:41 AM",
    type: "mention",
    unread: false,
  },
  {
    id: "3",
    initials: "SM",
    avatarColor: "#D9DFC5",
    title: "Sam mentioned Everyone",
    preview: "A new update has been posted in the channel.",
    source: "Community > General",
    time: "9:33 AM",
    type: "mention",
    unread: false,
  },
  {
    id: "4",
    initials: "TC",
    avatarColor: "#EAD2BC",
    title: "Taylor mentioned Everyone",
    preview: "Just sharing a quick message with everyone.",
    source: "Student Network",
    time: "Yesterday",
    type: "mention",
    unread: false,
  },
  {
    id: "5",
    initials: "ML",
    avatarColor: "#D6CBE8",
    title: "Morgan mentioned you",
    preview: "Please take a look whenever you have time.",
    source: "Project Team > General",
    time: "Yesterday",
    type: "mention",
    unread: false,
  },
  {
    id: "6",
    initials: "CR",
    avatarColor: "#ECC7C4",
    title: "Casey mentioned General",
    preview: "This is a reminder about the upcoming task.",
    source: "Mobile Development > General",
    time: "Monday",
    type: "mention",
    unread: false,
  },
  {
    id: "7",
    initials: "RK",
    avatarColor: "#D1E3E8",
    title: "Riley liked",
    preview: "Thanks for the update!",
    source: "Chat with you",
    time: "Monday",
    type: "reaction",
    unread: false,
  },
  {
    id: "8",
    initials: "SM",
    avatarColor: "#D9DFC5",
    title: "Sam mentioned Everyone",
    preview: "More sample information will appear here.",
    source: "Community > General",
    time: "Monday",
    type: "mention",
    unread: true,
  },
  {
    id: "9",
    initials: "RK",
    avatarColor: "#D1E3E8",
    title: "Riley replied to you",
    preview: "Sounds good, see you later!",
    source: "Chat with you",
    time: "Monday",
    type: "reply",
    unread: true,
  },
];
