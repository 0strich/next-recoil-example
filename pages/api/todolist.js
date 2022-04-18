// Next.js API route support: https://nextjs.org/docs/api-routes/lintroduction

const data = [
  {
    id: 0,
    content: "content0",
    isChecked: false,
  },
  {
    id: 1,
    content: "content1",
    isChecked: true,
  },
  {
    id: 2,
    content: "content2",
    isChecked: true,
  },
  {
    id: 3,
    content: "content3",
    isChecked: false,
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
