import { Button } from "../atoms/button";
import { Arrow } from "../atoms/svg/arrow";

export function Hero() {
  return (
    <section>
      <section>
        <h1>Build Your Awesome Platform</h1>
        <p>
          Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.
        </p>
        <Button 
          icon={<Arrow />}
        >
          Our services
        </Button>
      </section>
    </section>
  )
}