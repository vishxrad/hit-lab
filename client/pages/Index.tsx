import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "@/components/layout/app-layout";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import Members from "@/pages/Members";
import Team from "@/pages/Team";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import "@/i18n";

export default function Index() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/members" element={<Members />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}