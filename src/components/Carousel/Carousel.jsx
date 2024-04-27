import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Carosel() {
  const testimonials = [
    { image: "https://tsinfosec.com/assets/img/partner/partner-12.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-14.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-16.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-17.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-12.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-14.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-16.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-17.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-12.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-14.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-16.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-17.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-12.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-14.png" },
    { image: "https://tsinfosec.com/assets/img/partner/partner-16.png" },
  ];

  return (
    <div className="">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
