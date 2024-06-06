import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva("p-1 my-1 font-light ", {
  variants: {
    bgColor: {
      default: "bg-accent",
      secondary: "bg-accent",
      schools: "gradientSchools",
      coaching: "gradientCoaching",
      teaching: "gradientTeaching",
      enneagram: "gradientEnneagram",
      systemic: "gradientSystemic",
    },
    titleColor: {
      default: "text-white",
      black: "text-black",
    },
  },
  defaultVariants: {
    bgColor: "default",
    titleColor: "default",
  },
});

export default function HeaderTitle({
  bgColor,
  titleColor,
  children,
  ...props
}) {
  return (
    <section id="headerBand" className={("", cn(titleStyles({ bgColor })))}>
      <div className="mx-auto container-p">
        <h3>{children}</h3>
      </div>
    </section>
  );
}
