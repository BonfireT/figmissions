export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-8 px-6 text-center text-sm">
      <p className="font-semibold">Firebrand International Gospel Missions</p>
      <p>41 Rev John Ebegbuna Street, Aradagun, Badagry, NIGERIA</p>
      <p className="mt-2 text-gray-500">
        &copy; {new Date().getFullYear()} Firebrand International Gospel Missions
      </p>
    </footer>
  );
}