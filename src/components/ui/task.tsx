export default function Task() {
  return (
    <main className="p-20 max-w-1440px mr-auto ml-auto">
      <div className="p-20 border border-grayBorder rounded-24px">
        <h1 className="mb-10 text-30px font-medium">
          AI Chat GPT Web Application
        </h1>
        <p className="mb-8 text-15px font-medium flex items-center">
          <svg
            className="mr-4"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.4em"
            width="1.4em"
          >
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
            <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
          <span className="pt-0.5">Posted at 3:00 PM</span>
        </p>

        <div className="mb-12 text-15px">
          <div className="flex items-center">
            <svg
              className="mr-4 self-center"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.4em"
              width="1.4em"
            >
              <path d="M8 21h2v-3h6v-2h-6v-2h4.5c2.757 0 5-2.243 5-5s-2.243-5-5-5H9a1 1 0 00-1 1v7H5v2h3v2H5v2h3v3zm2-15h4.5c1.654 0 3 1.346 3 3s-1.346 3-3 3H10V6z" />
            </svg>
            <div className="flex items-center pt-0.5">
              <span className="font-medium">3000</span>
              <span className="ml-2">/руб</span>
            </div>
          </div>
          {/* <div>level</div> */}
        </div>
        <p className="mb-16 text-15px leading-6">
          Должно быть полное соответствие consectetur adipisicing elit. Incidunt
          autem culpa dolor modi maiores. Veniam, corporis inventore vero
          perspiciatis nobis accusantium soluta autem repudiandae ut, doloribus
          facere! Fugit, reprehenderit sapiente? nobis accusantium soluta autem
          repudiandae ut, doloribus facere! Fugit, reprehenderit sapiente? nobis
          accusantium soluta autem repudiandae ut, doloribus facere! Fugit,
          reprehenderit sapiente?
        </p>
        <div className="">contact block</div>
      </div>
    </main>
  );
}
