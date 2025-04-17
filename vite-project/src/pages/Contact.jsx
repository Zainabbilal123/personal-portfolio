export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
      <p className="mb-2">Phone: <a href="tel:03439321226" className="text-blue-500">03439321226</a></p>
      <p className="mb-6">Email: <a href="mailto:bilalzainab121@gmail.com" className="text-blue-500">bilalzainab121@gmail.com</a></p>

      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="w-full p-2 border rounded" />
        <textarea placeholder="Your Message" className="w-full p-2 border rounded h-32"></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </form>
    </section>
  );
}
  