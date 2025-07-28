import Image from "next/image";
import CategorySlide from "@/components/Common/Slide/category";
import { rightCategories, leftCategories } from "@/lib/data/category";
import TypeOfAwards from "@/components/UI/About/type-of-awards";
import FAQs from "@/components/Common/Others/faq";
import { aboutFaq } from "@/lib/data/faq";
import Panel from "@/components/UI/About/panel";
import AwardHeader from "@/components/UI/Awards/header";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <AwardHeader />

      <main>
        <section className="bg-[#FFF5E0] py-20">
          <div className="container grid md:grid-cols-2 items-center">
            <div className="grid place-content-center">
              <div className="w-[25rem] aspect-square h-auto rounded-lg bg-deepGold">
                <Image
                  src={"/images/medal.png"}
                  alt="timeline"
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <div className="space-y-6 p-8 text-center md:text-start">
              <h3 className="text-4xl font-bold text-midGold">Two Prestigious awards awaits in every category</h3>
              <p>
                Through the selection process, our judges meticulously examine nominees, choosing a winner from each
                subcategory to be honored with the esteemed &lsquo;Platinum Award.&lsquo; These winners progress to the
                final stage within their respective categories, where the ultimate victor in each group claims success
                and is honored with the prestigious &lsquo;Blue Garnet Award,&lsquo; marking the pinnacle of excellence.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-12">
            <h2 className="font-bold max-w-2xl text-darkGold text-3xl">
              15 Prestigious award categories recognizing impact in the Nigerian education system
            </h2>
          </div>

          <div className="space-y-4 mt-8">
            <CategorySlide categories={rightCategories} />
            <CategorySlide categories={leftCategories} direction="right" />

            <div className="grid place-content-center font-medium">
              <div>
                <Link href={"/categories"}>
                  <button
                    className="mt-6 px-6 py-3 rounded-lg text-darkBrown text-sm"
                    style={{ background: "linear-gradient(90deg, #FFC247 -6.07%, #E48900 156.79%)" }}
                  >
                    View All Categories
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* awards */}
        <TypeOfAwards />

        {/* faq */}
        <section className="mt-20">
          <div className="container">
            <h3 className="font-bold md:text-4xl text-3xl">Frequently Asked Questions</h3>
            <FAQs data={aboutFaq} variant="2" />
          </div>
        </section>

        <section className="my-20 space-y-10">
          <h4 className="text-center text-4xl font-bold text-darkGold">N.E.S.A Award Panel Judges</h4>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4 overflow-x-hidden">
              {Array.from({ length: 4 }).map((_, id) => (
                <div
                  key={id}
                  className="h-[20rem] aspect-[5/7] text-whiteGold w-auto bg-darkGold rounded-lg p-4 relative"
                >
                  <div className="absolute bottom-3 left-3">
                    <p className="text-midGold font-semibold">Judge Name</p>
                    <p>Role / Position</p>
                    <div className="flex items-center gap-2">
                      <Socials />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* panel of judges */}
          <Panel />
        </section>
      </main>
    </>
  );
};

const Socials = () => (
  <>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21.959 13.7189V21.0979H17.681V14.2129C17.681 12.4829 17.062 11.3029 15.514 11.3029C14.332 11.3029 13.628 12.0989 13.319 12.8679C13.206 13.1429 13.177 13.5259 13.177 13.9109V21.0979H8.897C8.897 21.0979 8.955 9.43788 8.897 8.22888H13.177V10.0529L13.149 10.0949H13.177V10.0529C13.745 9.17788 14.76 7.92688 17.033 7.92688C19.848 7.92688 21.959 9.76688 21.959 13.7189ZM4.421 2.02588C2.958 2.02588 2 2.98588 2 4.24888C2 5.48388 2.93 6.47288 4.365 6.47288H4.393C5.886 6.47288 6.813 5.48388 6.813 4.24888C6.787 2.98588 5.887 2.02588 4.422 2.02588H4.421ZM2.254 21.0979H6.532V8.22888H2.254V21.0979Z"
        fill="#FFF5E0"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 5.90716C21.2504 6.23454 20.4565 6.4492 19.644 6.54416C20.4968 6.0434 21.138 5.24927 21.448 4.31016C20.64 4.78049 19.7587 5.11177 18.841 5.29016C18.4545 4.88537 17.9897 4.56355 17.4748 4.34434C16.9598 4.12513 16.4056 4.01313 15.846 4.01516C13.58 4.01516 11.743 5.82516 11.743 8.05516C11.743 8.37116 11.779 8.68016 11.849 8.97516C10.2236 8.89786 8.63212 8.48257 7.17617 7.7558C5.72022 7.02903 4.43176 6.00674 3.393 4.75416C3.02883 5.36857 2.83742 6.06994 2.839 6.78416C2.8397 7.45213 3.00683 8.10939 3.32529 8.69656C3.64375 9.28372 4.1035 9.78228 4.663 10.1472C4.01248 10.1262 3.37602 9.95249 2.805 9.64016V9.69016C2.805 11.6482 4.22 13.2812 6.095 13.6532C5.74261 13.7467 5.37958 13.7941 5.015 13.7942C4.75 13.7942 4.493 13.7692 4.242 13.7192C4.51008 14.5271 5.02311 15.2315 5.70982 15.7345C6.39653 16.2375 7.22284 16.5142 8.074 16.5262C6.61407 17.6507 4.82182 18.2582 2.979 18.2532C2.647 18.2532 2.321 18.2332 2 18.1972C3.88125 19.3879 6.06259 20.0184 8.289 20.0152C15.836 20.0152 19.962 13.8582 19.962 8.51916L19.948 7.99616C20.7529 7.42983 21.4481 6.72201 22 5.90716Z"
        fill="#FFF5E0"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M16.017 2H7.947C6.37015 2.00185 4.85844 2.62914 3.74353 3.74424C2.62862 4.85933 2.00159 6.37115 2 7.948L2 16.018C2.00185 17.5948 2.62914 19.1066 3.74424 20.2215C4.85933 21.3364 6.37115 21.9634 7.948 21.965H16.018C17.5948 21.9631 19.1066 21.3359 20.2215 20.2208C21.3364 19.1057 21.9634 17.5938 21.965 16.017V7.947C21.9631 6.37015 21.3359 4.85844 20.2208 3.74353C19.1057 2.62862 17.5938 2.00159 16.017 2V2ZM19.957 16.017C19.957 16.5344 19.8551 17.0468 19.6571 17.5248C19.4591 18.0028 19.1689 18.4371 18.803 18.803C18.4371 19.1689 18.0028 19.4591 17.5248 19.6571C17.0468 19.8551 16.5344 19.957 16.017 19.957H7.947C6.90222 19.9567 5.90032 19.5415 5.16165 18.8026C4.42297 18.0638 4.008 17.0618 4.008 16.017V7.947C4.00827 6.90222 4.42349 5.90032 5.16235 5.16165C5.90122 4.42297 6.90322 4.008 7.948 4.008H16.018C17.0628 4.00827 18.0647 4.42349 18.8034 5.16235C19.542 5.90122 19.957 6.90322 19.957 7.948V16.018V16.017Z"
        fill="#FFF5E0"
      />
      <path
        d="M11.9821 6.81885C10.6135 6.82096 9.3016 7.36563 8.33397 8.33345C7.36633 9.30127 6.82192 10.6133 6.82007 11.9818C6.82166 13.3508 7.36609 14.6632 8.33397 15.6312C9.30185 16.5993 10.6142 17.144 11.9831 17.1458C13.3522 17.1443 14.6647 16.5997 15.6328 15.6316C16.6009 14.6635 17.1455 13.3509 17.1471 11.9818C17.145 10.6129 16.6 9.30073 15.6318 8.33304C14.6635 7.36535 13.351 6.82117 11.9821 6.81985V6.81885ZM11.9821 15.1378C11.1453 15.1378 10.3428 14.8054 9.75115 14.2138C9.15947 13.6221 8.82707 12.8196 8.82707 11.9828C8.82707 11.1461 9.15947 10.3436 9.75115 9.75193C10.3428 9.16025 11.1453 8.82785 11.9821 8.82785C12.8188 8.82785 13.6213 9.16025 14.213 9.75193C14.8047 10.3436 15.1371 11.1461 15.1371 11.9828C15.1371 12.8196 14.8047 13.6221 14.213 14.2138C13.6213 14.8054 12.8188 15.1378 11.9821 15.1378Z"
        fill="#FFF5E0"
      />
      <path
        d="M17.1559 8.09509C17.8391 8.09509 18.3929 7.54127 18.3929 6.85809C18.3929 6.17492 17.8391 5.62109 17.1559 5.62109C16.4728 5.62109 15.9189 6.17492 15.9189 6.85809C15.9189 7.54127 16.4728 8.09509 17.1559 8.09509Z"
        fill="#FFF5E0"
      />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M9.04598 5.865V8.613H7.03198V11.973H9.04598V21.959H13.18V11.974H15.955C15.955 11.974 16.215 10.363 16.341 8.601H13.197V6.303C13.197 5.96 13.647 5.498 14.093 5.498H16.347V2H13.283C8.94298 2 9.04598 5.363 9.04598 5.865Z"
        fill="#FFF5E0"
      />
    </svg>
  </>
);

export default Page;
