"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { ChangeEvent, useTransition } from "react";
import { LocalList } from "@/constant/Locale";
import { ChevronDown, Languages } from "lucide-react";

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    const newPathname = pathname.replace(/^\/[a-z]{2}/, `/${nextLocale}`);

    startTransition(() => {
      router.replace(newPathname);
    });
  };

  return (
    <form action="">
      <select
        id="countries"
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 md:p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        defaultValue={localActive}
        // className="bg-transparent  relative py-1 w-fit   px-2 focus:none focus:outline-none "
        onChange={onSelectChange}
        disabled={isPending}
      >
        {LocalList.map((item) => (
          <option className="!w-40 !text-sm " key={item.lang} value={item.lang}>
            {item.img} {item.name}
          </option>
        ))}
      </select>
    </form>
  );
}
