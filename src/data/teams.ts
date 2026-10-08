export type TeamItem = {
  id: string;
  initials: string;
  title: string;
  instructor: string;
  color: string;
};

export const teams: TeamItem[] = [
  {
    id: "web-development",
    initials: "WD",
    title: "Web Development",
    instructor: "Alex Morgan",
    color: "#0878D1",
  },
  {
    id: "communication",
    initials: "CO",
    title: "Communication",
    instructor: "Jordan Lee",
    color: "#0078E8",
  },
  {
    id: "mobile-development",
    initials: "MD",
    title: "Mobile Development",
    instructor: "Taylor Brooks",
    color: "#D83B01",
  },
  {
    id: "programming",
    initials: "PR",
    title: "Object-Oriented Programming",
    instructor: "Casey Smith",
    color: "#6355A5",
  },
  {
    id: "database",
    initials: "DB",
    title: "Database Design",
    instructor: "Morgan Reed",
    color: "#16858B",
  },
  {
    id: "software-project",
    initials: "SP",
    title: "Software Project Analysis and Design",
    instructor: "Riley Parker",
    color: "#D90088",
  },
];
