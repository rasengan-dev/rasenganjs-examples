import Typography from "../atoms/Typography";

interface CardContainerProps {
  title: string;
  children?: React.ReactNode;
}

export default function CardContainer({ title, children }: CardContainerProps) {
  return (
    <section className="w-full flex flex-col gap-4 rounded-lg p-4 bg-white border-[1px] border-border mb-4">
      <Typography text={title} className="text-xl font-medium" />

      <div className="flex flex-col gap-4">
        {children}
      </div>
    </section>
  )
}