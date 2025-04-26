import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
      <section className="bg-primary h-[500px] flex gap-5 flex-col justify-center items-center">
        <h1 className="header">
          Just <i className="lowercase">write</i> anything <br />
          Anytime you feel like it
        </h1>
        <p className="font-bold text-black text-center px-5 w-full max-w-3xl max-sm:text-xs max-md:text-lg">
          Write blogs, Vote on Them, and Grow Your Virtual Audience
        </p>
        <SearchForm />
      </section>
    </>
  );
}
