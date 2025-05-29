import { LoginForm } from "@/registry/brnd/auth/login-form";
import { Logo } from "@/registry/brnd/branding/logo";
import { ExampleBookingForm } from "@/registry/brnd/examples/example-booking-form";
import { ExampleHero } from "@/registry/brnd/examples/example-hero";
import { ExampleListingCard } from "@/registry/brnd/examples/example-listing-card";
import { ExampleListingGrid } from "@/registry/brnd/examples/example-listing-grid";
import { ExampleSectionWithBookingForm } from "@/registry/brnd/examples/example-section-booking";
import { ExampleSectionWithListing } from "@/registry/brnd/examples/example-section-listing";
import { ContactForm } from "@/registry/brnd/forms/contact-form";
import { MainNav } from "@/registry/brnd/navigation/main-nav";
export const blocks = [
  {
    name: "logo",
    component: Logo,
  },
  {
    name: "main-nav",
    component: MainNav,
  },
  {
    name: "login-form",
    component: LoginForm,
  },
  {
    name: "booking-form",
    component: ExampleBookingForm,
  },
  {
    name: "contact-form",
    component: ContactForm,
  },
  {
    name: "example-listing-card",
    component: ExampleListingCard,
  },
  {
    name: "example-listing-grid",
    component: ExampleListingGrid,
  },
  {
    name: "example-section-listing",
    component: ExampleSectionWithListing,
  },
  {
    name: "example-section-booking",
    component: ExampleSectionWithBookingForm,
  },
  {
    name: "example-hero",
    component: ExampleHero,
  },
];
