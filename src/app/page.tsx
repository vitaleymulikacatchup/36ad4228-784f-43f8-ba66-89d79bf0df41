"use client"
import { Flame } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplitStacked from '@/components/sections/hero/HeroSplitStacked';
import TextAbout from '@/components/sections/about/TextAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="reveal-blur"
      borderRadius="sharp"
      contentWidth="large"
      sizing="small"
      background="none"
      cardStyle="solid-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          brandName="Burger King"
          navItems={[
            { name: "Home", id: "home" },
            { name: "Menu", id: "menu" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Reserve Now", href: "contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitStacked
          title="Flame-Grilled Perfection Every Time"
          description="Experience the taste of flame-grilled burgers made fresh to order. Visit Burger King for quality meals that satisfy your cravings."
          tag="Premium Quality"
          tagIcon={Flame}
          buttons={[
            { text: "View Menu", href: "menu" },
            { text: "Find Location", href: "contact" }
          ]}
          mediaItems={[
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806105580-nmbufcrf.jpg", imageAlt: "Flame-grilled burger" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806106362-jcuzqcec.jpg", imageAlt: "Golden crispy fries" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806107220-70d8xvnn.jpg", imageAlt: "Cold refreshing beverage" },
            { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806108113-w6mm9rbh.jpg", imageAlt: "Complete meal combo" }
          ]}
          stackedVariant="card"
          imagePosition="right"
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Serving delicious flame-grilled burgers since day one. We believe in quality ingredients, fast service, and satisfying every guest with every meal. Burger King is your destination for authentic taste and bold flavors."
          buttons={[
            { text: "Our Story", href: "#" }
          ]}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Our Menu"
          description="Explore our selection of flame-grilled burgers and sides made fresh every day."
          tag="Popular Items"
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              name: "Classic Whopper",
              price: "$7.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806110158-lozr4abm.jpg",
              imageAlt: "Flame-grilled Whopper burger",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Classic Cheeseburger",
              price: "$5.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806109080-l5zketot.jpg",
              imageAlt: "Classic cheeseburger",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Crispy Chicken Sandwich",
              price: "$6.99",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806111157-afovsfc4.jpg",
              imageAlt: "Crispy chicken sandwich",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Real feedback from people who love our burgers and service"
          tag="Customer Reviews"
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Jessica Thompson",
              role: "Regular Customer",
              testimonial: "Best flame-grilled burgers in town! The quality never disappoints and the staff is always friendly. Will definitely be back.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806112039-41kdh3yc.jpg",
              imageAlt: "Jessica Thompson"
            },
            {
              id: "2",
              name: "Marcus Johnson",
              role: "Food Enthusiast",
              testimonial: "The freshness of ingredients and speed of service is incredible. Exactly what a great burger restaurant should be.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806112761-hhfd6ja4.jpg",
              imageAlt: "Marcus Johnson"
            },
            {
              id: "3",
              name: "Sarah Williams",
              role: "Family of Four",
              testimonial: "Perfect place for family meals. Kids love the burgers, adults love the quality. Great value for money.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806113462-9eaq6uly.jpg",
              imageAlt: "Sarah Williams"
            },
            {
              id: "4",
              name: "David Chen",
              role: "Burger Connoisseur",
              testimonial: "The flame-grilling technique and burger patty quality sets Burger King apart from competitors. Highly recommended.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806114796-q80r6rm5.jpg",
              imageAlt: "David Chen"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqDouble
          title="Frequently Asked Questions"
          description="Have questions about our menu, hours, or service? Find answers here."
          tag="Help Center"
          textboxLayout="default"
          faqs={[
            {
              id: "1",
              title: "What are your operating hours?",
              content: "We are open Monday to Sunday from 10:00 AM to 11:00 PM. We are closed on major holidays."
            },
            {
              id: "2",
              title: "Do you offer delivery?",
              content: "Yes, we offer delivery through multiple platforms. You can order directly from our website or through popular delivery apps."
            },
            {
              id: "3",
              title: "Are there vegetarian options?",
              content: "Yes, we offer vegetarian burger options and side dishes. Ask our staff for recommendations."
            },
            {
              id: "4",
              title: "Can I make reservations?",
              content: "We accept walk-ins and reservations. For large groups, please call ahead to ensure seating availability."
            },
            {
              id: "5",
              title: "Do you accommodate dietary restrictions?",
              content: "We can accommodate various dietary needs. Please inform our staff about your requirements when ordering."
            },
            {
              id: "6",
              title: "What payment methods do you accept?",
              content: "We accept cash, all major credit cards, and mobile payments including Apple Pay and Google Pay."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions or want to make a reservation? Contact us and we will get back to you as soon as possible."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your inquiry or reservation request",
            rows: 5,
            required: true
          }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_35ggfqwTaDTPV7ncegJJc94SZmR/uploaded-1763806115767-bzt0bsw2.jpg"
          imageAlt="Restaurant interior"
          mediaPosition="right"
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Burger King"
          columns={[
            {
              items: [
                { label: "Home", href: "home" },
                { label: "Menu", href: "menu" },
                { label: "About", href: "about" }
              ]
            },
            {
              items: [
                { label: "Hours", href: "#" },
                { label: "Locations", href: "contact" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Careers", href: "#" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}