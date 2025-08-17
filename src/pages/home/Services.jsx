import React from "react";
import HeadingSection from "../../components/HeadingSection";
import { FiActivity, FiCalendar, FiCompass, FiTruck } from "react-icons/fi";


const services = [
  {
    icon: FiCalendar,
    title: "Customizable Settings",
    description: "Nibh nullam vitae semper pharetra sit enim id. Ut eu non massa nec. Proin eget semper orci suspendisse in ornare adipiscing phasellus mauris. Velit faucibus at habitasse tempor sit odio ac commodo dui. ",
},
{
    icon: FiCompass,
    title: "Developer-Friendly",
    description: "Sed et pulvinar donec sed et, nisl dolor amet. Mollis aliquet volutpat ullamcorper ac sed lectus iaculis. Fringilla sed placerat commodo bibendum integer. Diam ut magna eleifend consectetur. ",
},
{
    icon: FiActivity,
    title: "Responsive Design",
    description: "Nunc amet, tempor morbi ligula ut faucibus gravida. Accumsan, suspendisse mus quisque pellentesque id vulputate hendrerit. Donec ipsum nibh elementum platea proin egestas gravida consectetur sit.",
},
{
    icon: FiTruck,
    title: "Cloud Integration",
    description: "Pellentesque auctor adipiscing lacus viverra. Neque, nulla in amet eget. Arcu, nibh purus urna amet sagittis quis tellus etiam eget. Ultrices egestas a tristique aliquet odio varius. ",
},
]

const Services = () => {
  return (
    <div className="max-w-screen-2xl container bg-white mx-auto py-20 px-5">
      <HeadingSection heading="Explore our range of professional services tailored to meet your business needs." subheading="services" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus, excepturi eos eaque provident iusto sint hic nihil iste architecto temporibus quasi facere aliquam sed in repellendus cupiditate ipsa, quas quae sapiente. Perspiciatis repudiandae vel magni facilis nulla, ex et modi. Placeat nobis minima porro, mollitia molestiae dolores provident obcaecati!"  />


      {/* services container */}
      <div>

      </div>
    </div>

  );
};

export default Services;
