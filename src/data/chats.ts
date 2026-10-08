export type ChatItem = {
  id: string;
  initials: string;
  avatarColor: string;
  title: string;
  preview: string;
  time: string;
  unread: boolean;
  mentioned: boolean;
  isFavourite: boolean;
};

export const initialChats: ChatItem[] = [
  {
    id: "saved-notes",
    initials: "AA",
    avatarColor: "#EACADD",
    title: "My Notes (You)",
    preview: "You: This is a sample saved message.",
    time: "Thursday",
    unread: false,
    mentioned: false,
    isFavourite: true,
  },
  {
    id: "student-network",
    initials: "SN",
    avatarColor: "#CDE1D5",
    title: "Student Network",
    preview: "Alex: Did everyone see the latest update?",
    time: "4:57 PM",
    unread: true,
    mentioned: true,
    isFavourite: false,
  },
  {
    id: "database-group",
    initials: "DG",
    avatarColor: "#CCD8ED",
    title: "Database Group",
    preview: "Jordan: Here is the sample document.",
    time: "11:46 AM",
    unread: false,
    mentioned: false,
    isFavourite: false,
  },
  {
    id: "programming-group",
    initials: "PG",
    avatarColor: "#DBE2C8",
    title: "Programming Group",
    preview: "Sam: We can review the code after class.",
    time: "11:45 AM",
    unread: true,
    mentioned: false,
    isFavourite: false,
  },
  {
    id: "project-team",
    initials: "PT",
    avatarColor: "#DECEED",
    title: "Project Team",
    preview: "You: I can work on the next section.",
    time: "11:12 AM",
    unread: false,
    mentioned: false,
    isFavourite: false,
  },
  {
    id: "taylor",
    initials: "TC",
    avatarColor: "#EAC8D8",
    title: "Taylor",
    preview: "You: Thanks for your help!",
    time: "Monday",
    unread: false,
    mentioned: false,
    isFavourite: false,
  },
  {
    id: "riley",
    initials: "RK",
    avatarColor: "#D1E3E8",
    title: "Riley",
    preview: "Riley: Can you check the message above?",
    time: "Monday",
    unread: true,
    mentioned: true,
    isFavourite: false,
  },
  {
    id: "study-group",
    initials: "SG",
    avatarColor: "#E2D9F0",
    title: "Study Group",
    preview: "Morgan: See you all next week.",
    time: "Sunday",
    unread: false,
    mentioned: false,
    isFavourite: false,
  },
];
