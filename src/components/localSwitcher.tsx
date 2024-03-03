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

  console.log(localActive);

  return (
    <label className="flex items-center rounded appearance-none border w-fit">
      <p className="sr-only">change language</p>

      <select
        defaultValue={localActive}
        className="bg-transparent appearance-none py-1   px-2 focus:none focus:outline-none w-full"
        onChange={onSelectChange}
        disabled={isPending}
      >
        {LocalList.map((item) => (
          <option className="!w-40 " key={item.lang} value={item.lang}>
            {item.img}
          </option>
        ))}
      </select>
    </label>
  );
}
