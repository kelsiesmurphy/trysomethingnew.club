import { Card, CardContent } from "@workspace/ui/components/card";

export default function Events() {
  return (
    <section className="flex container flex-col items-center pt-12">
      <Card className="bg-[#f7f8f9] w-full max-w-xl">
        <CardContent>
          <div className="w-full aspect-[4/3]">
            <iframe
              src="https://lu.ma/embed/calendar/cal-ImiGep6vlDoTX3p/events"
              className="w-full h-full rounded"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
