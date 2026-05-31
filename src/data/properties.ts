import villa1 from "@/assets/villa1.jpg";
import villa2 from "@/assets/villa2.jpg";
import villa3 from "@/assets/villa3.jpg";
import plot1 from "@/assets/plot1.jpg";
import plot2 from "@/assets/plot2.jpg";

export type Property = {
  id: string;
  title: string;
  type: "Home" | "Plot";
  location: string;
  price: string;
  size: string;
  beds?: number;
  image: string;
  tag?: string;
};

export const properties: Property[] = [
  {
    id: "rh-villa-jagatpura",
    title: "Heritage Villa, Jagatpura",
    type: "Home",
    location: "Jagatpura, Jaipur",
    price: "₹ 4.8 Cr",
    size: "4,200 sq ft",
    beds: 4,
    image: villa1,
    tag: "Signature",
  },
  {
    id: "rh-plot-mahindra-sez",
    title: "Premium Plot, Mahindra SEZ",
    type: "Plot",
    location: "Mahindra World City",
    price: "₹ 62 Lac",
    size: "240 sq yd",
    image: plot1,
    tag: "RERA Approved",
  },
  {
    id: "rh-villa-mansarovar",
    title: "Poolside Villa, Mansarovar Ext.",
    type: "Home",
    location: "Mansarovar Extension",
    price: "₹ 3.2 Cr",
    size: "3,100 sq ft",
    beds: 3,
    image: villa2,
    tag: "Ready to Move",
  },
  {
    id: "rh-plot-ajmer-road",
    title: "Township Plot, Ajmer Road",
    type: "Plot",
    location: "Ajmer Road, Jaipur",
    price: "₹ 38 Lac",
    size: "180 sq yd",
    image: plot2,
  },
  {
    id: "rh-villa-vaishali",
    title: "Arched Duplex, Vaishali Nagar",
    type: "Home",
    location: "Vaishali Nagar",
    price: "₹ 2.4 Cr",
    size: "2,600 sq ft",
    beds: 3,
    image: villa3,
    tag: "New Launch",
  },
  {
    id: "rh-plot-tonk-road",
    title: "Corner Plot, Tonk Road",
    type: "Plot",
    location: "Tonk Road, Jaipur",
    price: "₹ 75 Lac",
    size: "300 sq yd",
    image: plot1,
    tag: "Corner",
  },
];
