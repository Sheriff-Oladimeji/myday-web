import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-8 mx-auto py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: November 25, 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using My Day, you accept and agree to be bound by
              the terms and provisions of this agreement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">2. Use License</h2>
            <p className="leading-relaxed">
              Permission is granted to use My Day for personal, non-commercial
              purposes. This license shall automatically terminate if you
              violate any of these restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              3. User Responsibilities
            </h2>
            <p className="leading-relaxed mb-2">You are responsible for:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Maintaining the security of your device</li>
              <li>Backing up your data if desired</li>
              <li>Using the app in accordance with applicable laws</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">4. Disclaimer</h2>
            <p className="leading-relaxed">
              My Day is provided "as is" without any warranties, expressed or
              implied. We do not guarantee that the app will be error-free or
              uninterrupted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              In no event shall My Day or its developers be liable for any
              damages arising out of the use or inability to use the app.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">6. Data Loss</h2>
            <p className="leading-relaxed">
              While we strive to maintain data integrity, we are not responsible
              for any data loss. We recommend regularly backing up important
              information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">7. Modifications</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these terms at any time. Continued
              use of the app after changes constitutes acceptance of the new
              terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">8. Termination</h2>
            <p className="leading-relaxed">
              You may stop using My Day at any time. We reserve the right to
              terminate or suspend access to the app for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p className="leading-relaxed">
              These terms shall be governed by and construed in accordance with
              applicable laws, without regard to conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
            <p className="leading-relaxed mb-2">
              For questions about these Terms of Service, please contact:
            </p>
            <a
              href="mailto:dimejiademola5@gmail.com"
              className="text-primary hover:underline font-medium"
            >
              dimejiademola5@gmail.com
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
