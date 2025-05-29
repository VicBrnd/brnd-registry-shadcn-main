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
import { MainNavItem } from "@/types/nav";

export const blocks: MainNavItem[] = [
  {
    title: "Logo",
    name: "logo",
    component: Logo,
  },
  {
    title: "Main Nav",
    name: "main-nav",
    component: MainNav,
  },
  {
    title: "Login Form",
    name: "login-form",
    component: LoginForm,
  },
  {
    title: "Booking Form",
    name: "booking-form",
    component: ExampleBookingForm,
  },
  {
    title: "Contact Form",
    name: "contact-form",
    component: ContactForm,
  },
  {
    title: "Example Listing Card",
    name: "example-listing-card",
    component: ExampleListingCard,
  },
  {
    title: "Example Listing Grid",
    name: "example-listing-grid",
    component: ExampleListingGrid,
  },
  {
    title: "Example Section Listing",
    name: "example-section-listing",
    component: ExampleSectionWithListing,
  },
  {
    title: "Example Section Booking",
    name: "example-section-booking",
    component: ExampleSectionWithBookingForm,
  },
  {
    title: "Example Hero",
    name: "example-hero",
    component: ExampleHero,
  },
];
