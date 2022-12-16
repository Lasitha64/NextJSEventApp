import Image from "next/image";
import SingleEvent from "../../../src/components/events/single-event";
const Page = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default Page;

export async function getStaticPaths() {
  const { allEvents } = await import("/data/data.json");
  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const { allEvents } = await import("/data/data.json");

  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);
  return {
    props: {
      data: eventData,
    },
  };
}
