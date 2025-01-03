export default function handler(req, res) {
  const products = [
    {
      id: 1,
      name: "simple Pizza",
      price: 700,
      image: "/images/piza-6.jpeg",
    },
    {
      id: 2,
      name: "Spicy Pizza",
      price: 1200,
      image: "/images/piza-8.jpeg",
    },
    {
      id: 3,
      name: "Vaggi Spicy Pizza",
      price: 1600,
      image: "/images/piza-9.jpeg",
    },
    {
      id: 4,
      name: "Delicus Pizza",
      price: 1400,
      image: "/images/piza1.jpg",
    },
    {
      id: 5,
      name: "Family Spicy Pizza",
      price: 900,
      image: "/images/ttpiza.jpg",
    },
    {
      id: 6,
      name: "Double Delicus Pizza",
      price: 1000,
      image: "/images/piza2.jpg",
    },
  ];


  res.status(200).json(products);
}
