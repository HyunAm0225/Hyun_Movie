import React from "react";

const Sports = ({ name, picture }) => {
  return (
    <>
      <h1>I like {name}</h1>
      <img src={picture} alt={name} />
    </>
  );
};

const SportsILike = [
  {
    id: 1,
    name: "축구",
    image:
      "https://post-phinf.pstatic.net/MjAxODA5MjdfMTg2/MDAxNTM4MDE1OTkyMTcy.4hUaw5-0hAEy2jJUyxr0uVk-pQS9P7jeOJjYgcIL81og.Gc746QeV6HVjeeJAmfZDrs78SNAFofQiZHbnx8uuit0g.JPEG/1.jpg?type=w1200",
  },
  {
    id: 2,
    name: "야구",
    image:
      "https://lh3.googleusercontent.com/proxy/UryjhS8RChYY24QKKfx7s3GCaSiETD3l_c1ZsMPW7C7HbhOsbc7or6F_FDgJ6ua5DWp08naK17_8qXU_p8oZN8tt9dzbHntFYXUZytu3uPVqovFZmkm_6Lg5CHZzfGrN-DrQgPPvbEAzdyNBoPzXYQg7ymRVorcVpt8",
  },
  {
    id: 3,
    name: "배구",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201705/12/4038dcc7-5020-4a82-a969-7f2022a2d34a.jpg",
  },
  {
    id: 4,
    name: "농구",
    image:
      "https://post-phinf.pstatic.net/20161013_70/14763160811860lClB_JPEG/%C0%FC%C0%DA%B7%A3%B5%E5%BF%A4%B8%AE%C6%DD%C3%F7%B0%F1%B9%D8%BD%B8.jpg?type=w1200",
  },
  {
    id: 5,
    name: "탁구",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/79/Competitive_table_tennis.jpg",
  },
];

function App() {
  return (
    <div>
      {SportsILike.map((x) => (
        <Sports key={x.id} name={x.name} picture={x.image} />
      ))}
    </div>
  );
}

export default App;
