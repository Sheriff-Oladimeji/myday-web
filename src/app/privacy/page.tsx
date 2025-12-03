import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container px-4 md:px-8 mx-auto py-24 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">
          Last Updated: November 25, 2025
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="leading-relaxed">
              My Day ("we", "our", or "us") is committed to protecting your
              privacy. This Privacy Policy explains how we collect, use, and
              safeguard your information when you use our mobile application.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Storage</h2>
            <p className="leading-relaxed mb-2">
              All your data is stored locally on your device. We do not collect,
              transmit, or store your personal information on external servers.
            </p>
            <p className="leading-relaxed">
              Your tasks, habits, progress, and preferences remain entirely on
              your device and are never shared with us or any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Local Notifications</h2>
            <p className="leading-relaxed mb-2">
              My Day uses local notifications to remind you about your tasks and
              daily summaries. These notifications are:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Scheduled locally on your device</li>
              <li>Not sent through external servers</li>
              <li>Fully controlled by your notification preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Background Tasks</h2>
            <p className="leading-relaxed">
              The app may run background tasks to ensure notifications are
              delivered on time and to maintain streak tracking. These tasks
              operate entirely on your device and do not communicate with
              external servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Analytics</h2>
            <p className="leading-relaxed">
              We do not collect analytics or usage data. Your activity within
              the app is completely private.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Optional Cloud Sync (Future Feature)
            </h2>
            <p className="leading-relaxed mb-2">
              If you choose to sign in with Google for cloud synchronization:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your email and name will be used for authentication</li>
              <li>
                Your tasks and progress will be synced to secure cloud storage
              </li>
              <li>You can delete your cloud data at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Permissions</h2>
            <p className="leading-relaxed mb-2">
              My Day requests the following permissions:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Notifications:</strong> To send you task reminders and
                daily summaries
              </li>
              <li>
                <strong>Background Processing:</strong> To maintain streaks and
                schedule notifications
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Data Security</h2>
            <p className="leading-relaxed">
              Since all data is stored locally on your device, its security
              depends on your device's security measures. We recommend using
              device encryption and a secure lock screen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
            <p className="leading-relaxed">
              My Day does not knowingly collect information from children under
              13. The app is designed for general audiences.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by updating the "Last Updated" date at
              the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="leading-relaxed mb-2">
              If you have any questions about this Privacy Policy, please
              contact us at:
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
