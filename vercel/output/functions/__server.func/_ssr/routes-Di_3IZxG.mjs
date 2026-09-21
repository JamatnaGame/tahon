import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Menu, i as Phone, o as Mail, r as Search, s as ArrowUpLeft, t as X } from "../_libs/lucide-react.mjs";
import { t as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Di_3IZxG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-[background-color,color,transform,box-shadow] duration-[var(--motion-quick)] ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			primary: "bg-primary text-primary-fg shadow-[var(--shadow-border)] hover:bg-primary-hover",
			secondary: "bg-surface text-fg shadow-[var(--shadow-border)] hover:bg-surface-2",
			outline: "bg-transparent text-fg shadow-[var(--shadow-border)] hover:bg-surface",
			ghost: "bg-transparent text-fg hover:bg-surface-2",
			inverse: "bg-cream text-ink shadow-[var(--shadow-border)] hover:bg-cream-2"
		},
		size: {
			sm: "h-10 rounded-md px-3.5 text-sm",
			md: "h-11 rounded-lg px-5 text-sm",
			lg: "h-12 rounded-xl px-6 text-base"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var products = /* @__PURE__ */ JSON.parse("[{\"id\":\"ed22f4ec-4b41-42b8-aa9e-614fdd940792\",\"name\":\"بر النماص عضوي (حبة كاملة)\",\"slug\":\"بر-بللسمر-عضوي-هلباء-1\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بللسمر-عضوي-هلباء-1\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/301eb267-851f-49ed-b833-36d6a5be86c9.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"5832f9ce-497b-4d2e-ac4f-16710d2054b9\",\"name\":\"بر بللسمر عضوي (هلباء) (حبة كاملة)\",\"slug\":\"بر-بللسمر-عضوي-قياض-1\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بللسمر-عضوي-قياض-1\",\"price\":80.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f30a8b30-ab88-4f58-adeb-06f08135c867.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"9e318300-b10b-4d88-8697-692c1b020696\",\"name\":\"بر بللسمر عضوي (صيب) (حبة كاملة)\",\"slug\":\"بر-بللسمر-عضوي-قياض\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بللسمر-عضوي-قياض\",\"price\":80.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/e230dc1d-ff99-4c48-8ace-9908fe6b114b.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"8bae9dba-9e33-47b7-8389-fdea374a39e3\",\"name\":\"بر بللسمر عضوي (قياض) (حبة كاملة)\",\"slug\":\"بر-بللسمر-عضوي-فياض\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بللسمر-عضوي-فياض\",\"price\":80.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/1c455779-9366-4480-ae32-1f7d07d2d7e6.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"75e93898-7a86-4d67-8d45-6bbfceb833b2\",\"name\":\"بر بلجرشي (حبة كاملة)\",\"slug\":\"بر-بلجرشي\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بلجرشي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/86353b06-10ce-4265-b3ef-c7c38481be72.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"48c2f5c2-fffb-42e3-88f1-fa895e4457ca\",\"name\":\"بر الباحة عضوي (حبة كاملة)\",\"slug\":\"بر-الباحة-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/بر-الباحة-عضوي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/c98ab054-c898-42db-9411-73a73f535142.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"b71e2a56-e0c1-4dea-b51b-f1fe0e5a52e4\",\"name\":\"بر نخليه بلدي عضوي (حبة كاملة)\",\"slug\":\"نخليه-بلدي-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/نخليه-بلدي-عضوي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/14b5ff86-dee8-4b44-8005-49eab68cad39.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"f582462d-a426-4b63-ba67-77acc8ac6aa2\",\"name\":\"بر نقرة بني سعد عضوي (حبة كاملة)\",\"slug\":\"نقرة-بني-سعد-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/نقرة-بني-سعد-عضوي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3fc7eb4d-c892-4bd9-9838-76d99574d18d.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"84270b3a-da6e-46f8-928e-27f9f139ea94\",\"name\":\"بر نقرة بني مالك (حبة كاملة)\",\"slug\":\"نقرة-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/نقرة-بني-مالك\",\"price\":70.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/409c93fb-668d-4f1b-9ded-0bda317fa45f.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"eb8f1dcd-819f-45e6-8353-c54c599eca0d\",\"name\":\"بر بني سعد عضوي (حبة كاملة)\",\"slug\":\"بر-بني-سعد-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بني-سعد-عضوي\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/ea9a18ee-a4b5-4d5c-a2b6-328a953715fd.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e288204b-e412-4ed6-910d-fd2f3005ff88\",\"name\":\"بر السودة عضوي (حبة كاملة)\",\"slug\":\"بر-السودة-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/بر-السودة-عضوي\",\"price\":150.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/27b990dd-1762-493c-833a-5f166b87b53e.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"05490c8f-821f-4c2e-9a42-1c45caf08963\",\"name\":\"بر معية الفوارة (حبة كاملة)\",\"slug\":\"بر-معية-الفوارة\",\"url\":\"https://tahunaltayib.zid.store/products/بر-معية-الفوارة\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/ba8212e1-d410-449d-8521-647430754a49.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"d332d12d-28a6-4311-a893-5284b727a65e\",\"name\":\"حب الطيف ابيض\",\"slug\":\"حب-الطيف-احمر-ابيض\",\"url\":\"https://tahunaltayib.zid.store/products/حب-الطيف-احمر-ابيض\",\"price\":85.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/846d4a9b-4ad9-4f1b-a6ad-b0b14132ee65.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e0808bd1-2157-4a77-a8dd-479875f1bd35\",\"name\":\"سويق شعير اخضر نخب\",\"slug\":\"سويق-شعير-اخضر-نخب\",\"url\":\"https://tahunaltayib.zid.store/products/سويق-شعير-اخضر-نخب\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/c53dc2c7-1e4c-465f-87a0-af0fe9118297.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"22401ad0-cf99-4724-9409-c6e7a74917b5\",\"name\":\"استرالي\",\"slug\":\"استرالي\",\"url\":\"https://tahunaltayib.zid.store/products/استرالي\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/795824ea-42f8-4360-aa8c-c44680225c18.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"7e988e31-2323-43d6-801c-64071ff09649\",\"name\":\"عماني ابو صقر\",\"slug\":\"عماني-ابو-صقر\",\"url\":\"https://tahunaltayib.zid.store/products/عماني-ابو-صقر\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f274d863-f6ff-4cdd-ae2b-d1b7b5be0e4f.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"2ba0e1e1-22e0-4d40-b6dd-b64e364433eb\",\"name\":\"دبي\",\"slug\":\"دبي\",\"url\":\"https://tahunaltayib.zid.store/products/دبي\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3cd0004c-7d77-4487-884c-b0d27afebfdb.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"d9d893a9-d0e3-4eae-8d45-a91b965779c5\",\"name\":\"قصيم\",\"slug\":\"قصيم\",\"url\":\"https://tahunaltayib.zid.store/products/قصيم\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/633ff762-683c-41bb-9df5-4091ef4ca1ed.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"0c29809f-9883-46e7-956c-a340110f3079\",\"name\":\"نجران\",\"slug\":\"نجران\",\"url\":\"https://tahunaltayib.zid.store/products/نجران\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/eb2f1f65-4714-40f5-b88c-66a14ca8bc45.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"84c90b45-aa3c-4a5e-8f60-af7c9651993d\",\"name\":\"بر يمني (حبة كاملة)\",\"slug\":\"بر-يمني\",\"url\":\"https://tahunaltayib.zid.store/products/بر-يمني\",\"price\":35.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f1cb0268-5360-43dc-8a3c-ad836eecd503.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"33eaaad8-5003-4079-ab5c-c19f10fde1d7\",\"name\":\"مشعورة بللسمر\",\"slug\":\"مشعورة-بللسمر\",\"url\":\"https://tahunaltayib.zid.store/products/مشعورة-بللسمر\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5608bd7b-ef8c-439c-b723-aa6df880142f.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"ca6ab3e8-270d-4a49-ac8f-cfa4ecaa1095\",\"name\":\"بر نقرة بلدي (حبة كاملة)\",\"slug\":\"نقرة-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/نقرة-بلدي\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/6ebd1b9c-c251-457d-a892-6bcc6f8fc406.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"868dbb4a-0a72-498a-be93-465e92feefa3\",\"name\":\"بر وادي الدواسر (حبة كاملة)\",\"slug\":\"بر-وادي-الدواسر\",\"url\":\"https://tahunaltayib.zid.store/products/بر-وادي-الدواسر\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/06fd6758-b92f-4561-afb5-57e1a44d4d8a.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"4b5eb08b-13cb-4fe1-80cb-889a27b016e4\",\"name\":\"شعير بلدي عضوي\",\"slug\":\"شعير-بلدي-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/شعير-بلدي-عضوي\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/ba759045-87b6-49c6-84b4-696439eeeb21.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"ded699f3-df28-4175-a7ff-932050518e6d\",\"name\":\"شوفان حب كامل\",\"slug\":\"شوفان-حب-كامل\",\"url\":\"https://tahunaltayib.zid.store/products/شوفان-حب-كامل\",\"price\":75.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5e00f3cf-3e57-4f24-af71-48cbad16e298.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"98d9fa9e-0341-47cb-a0f2-997c3633cc95\",\"name\":\"شوفان بلدي حب كامل\",\"slug\":\"شوفان-بلدي-حب-كامل\",\"url\":\"https://tahunaltayib.zid.store/products/شوفان-بلدي-حب-كامل\",\"price\":225.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/d43e5f5a-56ee-4ba9-8e20-80ef2599a3cd.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"eb8ba58d-7ff7-422f-8ede-8c7fc47faf6a\",\"name\":\"شوفان مجروش\",\"slug\":\"شوفان-مجروش\",\"url\":\"https://tahunaltayib.zid.store/products/شوفان-مجروش\",\"price\":75.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/adce8bcc-4e57-4e6a-a1ad-d2030600c34d.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"2e1f2e52-ac13-4791-9c73-9108094fa5ee\",\"name\":\"الحنطة السوداء البلدي\",\"slug\":\"الحنطة-السوداء-البلدي\",\"url\":\"https://tahunaltayib.zid.store/products/الحنطة-السوداء-البلدي\",\"price\":70.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/9169b469-3e33-4650-8c39-74f864a7632e.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"ae54cfe3-abf0-4f99-b290-095213d4ee04\",\"name\":\"الحنطة السوداء الهندي\",\"slug\":\"الحنطة-السوداء-الهندي\",\"url\":\"https://tahunaltayib.zid.store/products/الحنطة-السوداء-الهندي\",\"price\":45.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/e7ab44cc-28d4-48d2-bedf-0e7013b71a53.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"dfeec84e-2ca8-4a0c-b67f-ca5d4862bbdb\",\"name\":\"دخن تهامه\",\"slug\":\"دخن-تهامه\",\"url\":\"https://tahunaltayib.zid.store/products/دخن-تهامه\",\"price\":150.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/37f53a48-fdc6-4658-8a5c-a0eea41ebffa.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"b334ecb5-6017-4ced-9aae-32898ed689c0\",\"name\":\"دخن شديدة\",\"slug\":\"دخن-شديدة\",\"url\":\"https://tahunaltayib.zid.store/products/دخن-شديدة\",\"price\":150.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/1edaf9a1-42c9-496d-a3d9-1c2a6a695da7.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"0e7e3d3a-2a75-43a5-b873-47ea00555041\",\"name\":\"ذرة حمراء تهامه\",\"slug\":\"ذرة-حمراء-تهامه\",\"url\":\"https://tahunaltayib.zid.store/products/ذرة-حمراء-تهامه\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f6e4d1ec-89c7-41dd-9485-14e649292df8.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"46a6dcac-4e34-47f2-bfa9-60011f86d11a\",\"name\":\"حبش ابيض\",\"slug\":\"حبش-ابيض\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-ابيض\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/6927359f-2b1c-469c-83a7-572cc058dac2.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"4f1980a4-776f-401a-b8ce-33d1087bd27c\",\"name\":\"شعير بدون قشر(بلبوله)\",\"slug\":\"حبش-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-بلدي\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/b63d52dc-b81f-4e86-80cc-86952a40d6b0.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"806780d4-8336-4562-9956-a12b23ccc32f\",\"name\":\"حبش بلدي\",\"slug\":\"حبش-اصفر-1\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-اصفر-1\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f9ca449f-c3bd-46cb-99df-132bbdfba6c2.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"094b247f-01f3-4b37-ab7f-522b2ead1112\",\"name\":\"حبش اصفر\",\"slug\":\"حبش-اصفر\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-اصفر\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f9ca449f-c3bd-46cb-99df-132bbdfba6c2.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"a4e06b13-858a-4f6c-8247-ba3889f7885f\",\"name\":\"مجدولة بني مالك\",\"slug\":\"مجدولة-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/مجدولة-بني-مالك\",\"price\":300.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/e7034d7f-6089-4d39-9697-f17212768b7c.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"7cecd124-1933-4c16-98f0-6024eb305923\",\"name\":\"حبش ابيض سويق بني مالك\",\"slug\":\"حبش-ابيض-سويق-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-ابيض-سويق-بني-مالك\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/029c4403-941c-4d37-af1c-916dba947109.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"68027b83-1bff-470b-a5be-37539dc7cac2\",\"name\":\"حبش اصفر سويق بني مالك\",\"slug\":\"حبش-اصفر-سويق-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/حبش-اصفر-سويق-بني-مالك\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/792a7350-288a-41f9-9545-4ca0b4e8f5fa.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"b0d95394-7cc7-4c2a-96fe-8922723435ce\",\"name\":\"شعير يمني\",\"slug\":\"شعير-يمني\",\"url\":\"https://tahunaltayib.zid.store/products/شعير-يمني\",\"price\":8.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/63dbc0db-f1cb-4da7-9d85-3f0418350dc2.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"0baea706-7c52-4846-b323-80b111692861\",\"name\":\"ذرة بيضاء تهامه\",\"slug\":\"ذرة-بيضاء-تهامه\",\"url\":\"https://tahunaltayib.zid.store/products/ذرة-بيضاء-تهامه\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/0e149945-8197-44e6-b0b1-7ad57fd1b49b.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"25340c84-acb2-4fa1-af4c-f25ea494207f\",\"name\":\"دقسه\",\"slug\":\"دقسه-تيف\",\"url\":\"https://tahunaltayib.zid.store/products/دقسه-تيف\",\"price\":90.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/636f00a7-9d6b-45c9-af2b-49289e10d945.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"bfdfb28a-1016-4519-b2cc-ad6eddfbef37\",\"name\":\"سويق شعير اخضر بني مالك\",\"slug\":\"سويق-شعير-اخضر-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/سويق-شعير-اخضر-بني-مالك\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/9c68b548-e754-4f92-8ab9-075b09f51bd6.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e427ccc9-fa06-45a0-86bf-60c385463366\",\"name\":\"ذرة تهامة عسير(بيضاء)\",\"slug\":\"ذرة-تهامة-عسير\",\"url\":\"https://tahunaltayib.zid.store/products/ذرة-تهامة-عسير\",\"price\":65.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/fb246e4c-f462-400c-8c0f-35ac02713faa.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e8025fb8-d171-436d-be2b-fec9145e9918\",\"name\":\"حب الطيف احمر\",\"slug\":\"حب-الطيف-احمر-ابيض-1\",\"url\":\"https://tahunaltayib.zid.store/products/حب-الطيف-احمر-ابيض-1\",\"price\":85.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/4ae2f545-4109-41bb-97d6-14f8def93ae1.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"b08e437c-1b02-4fff-9c1a-9627b3d55882\",\"name\":\"شعير بني مالك(عضوي)\",\"slug\":\"شعير-بني-مالك\",\"url\":\"https://tahunaltayib.zid.store/products/شعير-بني-مالك\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/505b28d3-3b31-4a5f-99c5-60fecd074be5.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"424fb44e-c6c4-43d9-acb1-42429f781009\",\"name\":\"دخن بيضان المدينة\",\"slug\":\"دخن-بيضان-المدينة\",\"url\":\"https://tahunaltayib.zid.store/products/دخن-بيضان-المدينة\",\"price\":90.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/07ec64ea-0ff3-43af-940d-b8e7b66724e3.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"8b8f29d7-d0b6-40e0-8b4f-546b2eb05fdd\",\"name\":\"دخن ساية عضوي\",\"slug\":\"دخن-ساية-عضوي\",\"url\":\"https://tahunaltayib.zid.store/products/دخن-ساية-عضوي\",\"price\":70.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5ef48602-4018-4127-8162-cf20e72ddbc9.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"bd96c59d-a389-4018-b57d-92cf9520c061\",\"name\":\"طبيخ البر (شوربة)\",\"slug\":\"بر-حبة-كاملة-مطبوخ-شوربة\",\"url\":\"https://tahunaltayib.zid.store/products/بر-حبة-كاملة-مطبوخ-شوربة\",\"price\":25.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/d412ff6c-52d3-43bc-b462-e20c1400f578.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e06859c5-9387-4548-977d-8e68c22ced58\",\"name\":\"دخن بدون قشر\",\"slug\":\"دخن-بدون-قشر\",\"url\":\"https://tahunaltayib.zid.store/products/دخن-بدون-قشر\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/8c24045a-a0a9-4181-a1e0-120fee5c19b8.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"6f61a471-cc8c-4411-8817-19dcb0e47599\",\"name\":\"جريش دبي\",\"slug\":\"جريش-دبي\",\"url\":\"https://tahunaltayib.zid.store/products/جريش-دبي\",\"price\":6.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/dcfb34d9-e9b7-405b-b484-42fd3ae4b8f0.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"39bcab4c-3192-44bc-a066-9dc63bf8c605\",\"name\":\"جريش تركي\",\"slug\":\"جريش-قصيم-1\",\"url\":\"https://tahunaltayib.zid.store/products/جريش-قصيم-1\",\"price\":8.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3cad5c16-5411-4b59-858b-97311547495a.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"253909f8-5a34-4b59-acc8-776613450dfa\",\"name\":\"جريش قصيم\",\"slug\":\"جريش-قصيم\",\"url\":\"https://tahunaltayib.zid.store/products/جريش-قصيم\",\"price\":7.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3cad5c16-5411-4b59-858b-97311547495a.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"3941e4a3-190c-4d61-807c-a8c1d0f20c37\",\"name\":\"ذره صفراء\",\"slug\":\"ذره-صفراء\",\"url\":\"https://tahunaltayib.zid.store/products/ذره-صفراء\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/a8a34f7a-00b1-479c-a7b2-93f6770f9f30.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"855d878f-342f-484d-a7f2-154283c9f795\",\"name\":\"نخاله\",\"slug\":\"نخاله\",\"url\":\"https://tahunaltayib.zid.store/products/نخاله\",\"price\":5.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/221834ce-efb9-48cd-8737-460b0c1ffc91.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"9c12afdf-9922-40b6-bb66-db551a96c52c\",\"name\":\"شعير مجروش\",\"slug\":\"شعير-مجروش\",\"url\":\"https://tahunaltayib.zid.store/products/شعير-مجروش\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/949a66ec-29e6-4430-aa9d-d464843ada35.jpg\",\"categories\":[\"البر\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"d226563f-df6b-44a3-b670-1fe26035f79f\",\"name\":\"خلطة بلدي(مشكل)\",\"slug\":\"خلطة-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-بلدي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/2e10a8f9-c02f-41e4-988a-ab9a5359fc0b.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"d1b34f18-7ee8-4735-ad8c-9afd152963a7\",\"name\":\"خلطة السكر والدايت\",\"slug\":\"خلطة-السكر-والدايت\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-السكر-والدايت\",\"price\":75.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/105a47c9-eb86-472b-84d6-f1c1e5b23f58.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"a0222a78-ebc1-4c4e-9a6f-1e08ac8961da\",\"name\":\"خلطة السكر\",\"slug\":\"خلطة-السكر-شوفانشعيردخن\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-السكر-شوفانشعيردخن\",\"price\":75.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/491c3d3c-815d-4377-a893-f499adca95f8.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"80e951aa-e294-4630-9a72-92dd81f7920f\",\"name\":\"خلطة ملكي\",\"slug\":\"خلطة-ملكي-1\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-ملكي-1\",\"price\":35.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/0ef897d3-3aae-408a-bd15-ed8f6da73986.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"4c0312e6-601e-486e-9b6d-23d103f4bd39\",\"name\":\"خلطة خالي الجولتين\",\"slug\":\"خلطة-7-حبوب-2\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-7-حبوب-2\",\"price\":80.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/191182e4-9808-4935-8779-7667039ad4d8.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e3fe0b79-ec3a-4977-9dac-07b0dbc48a32\",\"name\":\"خلطة بر بلدي(حبة كاملة)\",\"slug\":\"خلطة-بر-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-بر-بلدي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/99c5d5e3-a0b6-439f-ba29-5a6d84275585.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"6cbbc4a9-ca84-46b6-9a43-9bfa8e47d2e6\",\"name\":\"خلطة 7 حبوب\",\"slug\":\"خلطة-7-حبوب-1\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-7-حبوب-1\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/12026536-29dd-4d0d-8fca-4178693d203b.jpg\",\"categories\":[\"الخلطات\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"16997fe4-9a27-4e3f-81f7-7293234b5970\",\"name\":\"شمر(السنوت) بلدي جبال السودة\",\"slug\":\"عدس-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/عدس-بلدي\",\"price\":70.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/681db933-95ec-4f70-b6b5-7cac0bc5e33f.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"534ac9a5-b5f0-4ca7-a1b4-581050188622\",\"name\":\"عدس بلدي\",\"slug\":\"ثوم-ذكر\",\"url\":\"https://tahunaltayib.zid.store/products/ثوم-ذكر\",\"price\":25.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/0a4ddb31-0cca-4091-a41d-d07a99940da1.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"ebe863c0-0c48-4fca-b283-b1da1722cc8d\",\"name\":\"ثوم ذكر\",\"slug\":\"حب-الرشاد\",\"url\":\"https://tahunaltayib.zid.store/products/حب-الرشاد\",\"price\":80.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/ddb7f138-47d1-41b6-822d-8797ced10978.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"8f6aa80a-dcdc-4fed-8c5a-00a296e46f58\",\"name\":\"حب الرشاد(بلدي)\",\"slug\":\"سمسم-بلدي\",\"url\":\"https://tahunaltayib.zid.store/products/سمسم-بلدي\",\"price\":60.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/c9c60346-bc8c-4e35-9257-2822e34c14dc.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"4de67110-3c20-4188-9369-7865199f25ef\",\"name\":\"سمسم بلدي\",\"slug\":\"بر-بللسمر-عضوي-هلباء\",\"url\":\"https://tahunaltayib.zid.store/products/بر-بللسمر-عضوي-هلباء\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5780b90a-68ab-455b-926f-70a8b5721128.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"92d33eee-34b3-4321-affa-14fbb3060884\",\"name\":\"خضير (جيزاني)\",\"slug\":\"خضير-جيزاني\",\"url\":\"https://tahunaltayib.zid.store/products/خضير-جيزاني\",\"price\":30.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3f8844ed-ca53-4e99-80d7-8003d4cf5850.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":false,\"rating\":0.0,\"sold\":0},{\"id\":\"35019809-b579-4727-8b10-1674a8033293\",\"name\":\"دجر يمني\",\"slug\":\"عدس-اصفر-1\",\"url\":\"https://tahunaltayib.zid.store/products/عدس-اصفر-1\",\"price\":8.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/b9861a94-6cad-477e-9a7f-8727ff099a17.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"8ec288a4-4561-467f-af02-619678400de5\",\"name\":\"قهوة شعير\",\"slug\":\"قهوة-شعير\",\"url\":\"https://tahunaltayib.zid.store/products/قهوة-شعير\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/af916dc0-0708-4996-8b7d-a52a2d6129f9.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"14f333b8-1fc8-4a25-90fb-fd390da575ef\",\"name\":\"لوز بلدي حصب بقشر\",\"slug\":\"لوز-بلديلباب\",\"url\":\"https://tahunaltayib.zid.store/products/لوز-بلديلباب\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/1011bf60-f368-48bc-b7cc-ee256603ee35.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"390f9b8c-b08e-480b-801f-0f8f86082705\",\"name\":\"لوز بلدي(لباب)\",\"slug\":\"خواضهدخن-بيضان-محموس\",\"url\":\"https://tahunaltayib.zid.store/products/خواضهدخن-بيضان-محموس\",\"price\":140.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/b57a9f27-5c8f-4a7a-9455-f4b585fe79cb.png\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"a9a3d087-851d-4760-9e9d-f401d0f092b9\",\"name\":\"خواضه(دخن بيضان محموس)\",\"slug\":\"خواضه\",\"url\":\"https://tahunaltayib.zid.store/products/خواضه\",\"price\":20.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/18c152a4-516b-49d0-9bd6-d2ce2dc9a48a.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"0f5f5884-c181-4369-bf42-a8e5d3dfbf70\",\"name\":\"فاصوليا بيضاء\",\"slug\":\"فاصوليا-بيضاء\",\"url\":\"https://tahunaltayib.zid.store/products/فاصوليا-بيضاء\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/1f781623-26f6-4cec-9f2f-a459191308e2.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"d0556d1e-ce23-426a-bece-615499c146b9\",\"name\":\"فاصوليا حمراء\",\"slug\":\"فاصوليا-حمراء\",\"url\":\"https://tahunaltayib.zid.store/products/فاصوليا-حمراء\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/fcd0f064-a6fb-4958-9ba6-1ef79e3c53df.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"3b880702-a322-479f-99c3-e24d159127ba\",\"name\":\"عدس اصفر\",\"slug\":\"عدس-اصفر\",\"url\":\"https://tahunaltayib.zid.store/products/عدس-اصفر\",\"price\":8.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5ed052e2-b3ec-4d6a-89cb-e0c741187c31.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"4dc9ce57-d973-4600-9e98-ca9a9aee2089\",\"name\":\"عدس اسود\",\"slug\":\"عدس-اسود\",\"url\":\"https://tahunaltayib.zid.store/products/عدس-اسود\",\"price\":8.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/1e575f93-600c-4579-8fdb-2a242add41c2.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"e3e4dc31-c119-4be0-b0dc-1e3164f94733\",\"name\":\"عدس احمر\",\"slug\":\"عدس-احمر\",\"url\":\"https://tahunaltayib.zid.store/products/عدس-احمر\",\"price\":7.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5399fb85-b784-44fb-a190-ed3fdc37d935.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"f91ebf19-3065-46a2-ac6c-d7189045af5f\",\"name\":\"دقيق إيطالي زيرو معجنات\",\"slug\":\"دقيق-إيطالي-زيرو-معجنات\",\"url\":\"https://tahunaltayib.zid.store/products/دقيق-إيطالي-زيرو-معجنات\",\"price\":190.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f2ed0b9b-d336-4c28-a48f-905ca272e681.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":false,\"rating\":0.0,\"sold\":0},{\"id\":\"885ee5aa-a776-48fb-8df9-f221a77a2fd1\",\"name\":\"دقيق اللوز\",\"slug\":\"دقيق-اللوز\",\"url\":\"https://tahunaltayib.zid.store/products/دقيق-اللوز\",\"price\":50.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/ce05c6ee-3257-42aa-b080-1f436f1dab34.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"746f8091-25d9-4e50-84eb-a9eca0e0d2f4\",\"name\":\"حلبة يمني\",\"slug\":\"حلبة-يمني\",\"url\":\"https://tahunaltayib.zid.store/products/حلبة-يمني\",\"price\":30.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/a078de49-2146-4265-9af3-de0e47e79e54.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"83b6f95e-38d0-4fa6-8988-31d2d7182235\",\"name\":\"زيت سمسم\",\"slug\":\"زيت-سمسم\",\"url\":\"https://tahunaltayib.zid.store/products/زيت-سمسم\",\"price\":40.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/fd908c4b-76fe-4218-8152-9062cad43775.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"8a8053b2-cf87-4bfb-ac60-8f139dcce07b\",\"name\":\"خلطة البذاير\",\"slug\":\"خلطة-البذاير\",\"url\":\"https://tahunaltayib.zid.store/products/خلطة-البذاير\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/b7e3eac8-9e6a-47d2-be2a-e560d8e57230.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"065a339a-f737-46e3-b19a-cfffa46fd246\",\"name\":\"خميره عضوية المانية\",\"slug\":\"خميره-عضوية-إيطالية-9-جرام\",\"url\":\"https://tahunaltayib.zid.store/products/خميره-عضوية-إيطالية-9-جرام\",\"price\":10.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/5ff3f240-ec8f-47ac-a129-93a8e23f9f8c.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"1102af28-5a19-4e07-a167-0a4e0b762387\",\"name\":\"خلطة بر الطيب/ات (حبة كاملة)\",\"slug\":\"جنين-القمح\",\"url\":\"https://tahunaltayib.zid.store/products/جنين-القمح\",\"price\":70.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/68b04404-6683-43b4-a4e0-4676e903bb74.jpg\",\"categories\":[\"البر\",\"الخلطات\",\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"2cf13a9e-83aa-43e4-a227-55a570c120af\",\"name\":\"جنين القمح\",\"slug\":\"جنين-القمح-100-جرام\",\"url\":\"https://tahunaltayib.zid.store/products/جنين-القمح-100-جرام\",\"price\":23.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3127f922-0b9f-49d0-8bcf-6c2a836d78d1.jpg\",\"categories\":[\"أخرى\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"25f76cf5-5eb0-455a-8558-3693f04a394f\",\"name\":\"سمح الجوف\",\"slug\":\"سمح-الجوف-500جرام\",\"url\":\"https://tahunaltayib.zid.store/products/سمح-الجوف-500جرام\",\"price\":70.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/3a066e9e-55d5-4e2f-b48c-af2b7937d634.jpeg\",\"categories\":[],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"3ac5b6a7-eb42-46c8-ad7f-0593f28cc5b7\",\"name\":\"سمن غنم منجور\",\"slug\":\"سمن-غنم-منجور-1-كيلو\",\"url\":\"https://tahunaltayib.zid.store/products/سمن-غنم-منجور-1-كيلو\",\"price\":150.0,\"salePrice\":null,\"inStock\":false,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/e7b544bb-3f4f-42dc-9aac-5cad47e947a6.jpg\",\"categories\":[\"السمن والعسل\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"78010161-a0bd-419e-b0f3-5e271a5fb2d7\",\"name\":\"عسل سمر\",\"slug\":\"عسل-سمر-1-كيلو\",\"url\":\"https://tahunaltayib.zid.store/products/عسل-سمر-1-كيلو\",\"price\":280.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/64511e30-ebe6-4178-8617-2c21e52858a2.jpg\",\"categories\":[\"السمن والعسل\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0},{\"id\":\"99d158ff-7f6e-4899-8341-8a1e74572a59\",\"name\":\"عسل سدر\",\"slug\":\"عسل-سدر-1-كيلو\",\"url\":\"https://tahunaltayib.zid.store/products/عسل-سدر-1-كيلو\",\"price\":280.0,\"salePrice\":null,\"inStock\":true,\"image\":\"https://media.zid.store/cdn-cgi/image/fit=scale-down,width=770,height=770/https://media.zid.store/7cdaa19e-ee1d-40f4-b749-0cab725e3596/f0b9be88-17a9-45f8-9ff1-aa11de9c1fc4.jpg\",\"categories\":[\"السمن والعسل\"],\"hasOptions\":true,\"rating\":0.0,\"sold\":0}]");
function formatPrice(price, hasOptions) {
	const value = Number.isInteger(price) ? `${price}` : price.toFixed(2);
	return hasOptions ? `من ${value} ر.س` : `${value} ر.س`;
}
var STORE_URL = "https://tahunaltayib.zid.store/";
var STORE_NAME = "طاحون الطيب";
var SLOGAN = "حيث تُطحن الأصالة، ليفوح عبق الجودة";
var WHATSAPP_URL = "https://wa.me/966553745225";
var PHONE_DISPLAY = "055 374 5225";
var PHONE_TEL = "+966553745225";
var EMAIL = "mgder511@gmail.com";
var TIKTOK_URL = "https://www.tiktok.com/@altieb_tahon";
var FEATURED_SLUGS = [
	"بر-السودة-عضوي",
	"بر-بللسمر-عضوي-هلباء-1",
	"بر-بللسمر-عضوي-قياض-1",
	"بر-الباحة-عضوي",
	"نخليه-بلدي-عضوي",
	"خلطة-7-حبوب-1",
	"خلطة-السكر-شوفانشعيردخن",
	"عسل-سدر-1-كيلو"
];
var ORIGINS = [
	{
		name: "السودة",
		region: "مرتفعات عسير",
		note: "بر جبلي نادر من أعلى المصايف — نخب الطاحون."
	},
	{
		name: "النماص",
		region: "عسير",
		note: "بر عضوي من مصايف النماص، حبة كاملة طازجة الطحن."
	},
	{
		name: "بللسمر",
		region: "عسير",
		note: "ثلاثة مواسم: هلباء، صيب، وقياض — كل موسم بطعمه."
	},
	{
		name: "بلجرشي والباحة",
		region: "الباحة",
		note: "بر سراة الباحة البلدي، كثيف الرائحة في الخبز."
	},
	{
		name: "بني سعد وبني مالك",
		region: "الطائف وعسير",
		note: "نقرة وبر بلدي من مدرجات الجبل."
	},
	{
		name: "تهامة ونجران",
		region: "الجنوب",
		note: "ذرة ودخن وبر من تهامة عسير ونجران ووادي الدواسر."
	}
];
var PILLARS = [
	{
		title: "حبة كاملة",
		text: "نطحن البر بقشره وجنينه — لا دقيق أبيض منزوع الفائدة."
	},
	{
		title: "من أرضه",
		text: "بر الجبال والوديان السعودية، بأسماء مواسمها ومناطقها."
	},
	{
		title: "خلطات بعناية",
		text: "خلطات للسكر والدايت وخالية من الجلوتين وسبعة حبوب."
	},
	{
		title: "إلى بابك",
		text: "اطلب من المتجر مباشرة، والشحن داخل المملكة."
	}
];
var FAQS = [
	{
		q: "ما الذي يميز طاحون الطيب؟",
		a: "ننتقي البر البلدي والعضوي من مرتفعات عسير والباحة والطائف وغيرها، ونقدّمه حبةً كاملة كما خُلق — بأسماء مناطقه ومواسمه، لا كمنتج مجهول المصدر."
	},
	{
		q: "هل المنتجات عضوية؟",
		a: "كثير من أصناف البر معلّمة عضوية في اسمها: النماص، بللسمر، السودة، الباحة، نخليه وبني سعد. راجع صفحة المنتج في المتجر للتفاصيل."
	},
	{
		q: "أشتري حبة كاملة أم مطحوناً؟",
		a: "أغلب البر معروض كحبة كاملة مع خيارات للحجم. بعض الأصناف مجروشة أو خلطات جاهزة للخبز والعصائد. اختر الخيارات من صفحة المنتج."
	},
	{
		q: "ما الخلطات المتوفرة؟",
		a: "خلطة سبعة حبوب، خلطة السكر، خلطة السكر والدايت، خلطة خالية من الجلوتين، خلطة ملكي، وخلطة بلدي مشكل — جاهزة حسب الاستخدام."
	},
	{
		q: "كيف أطلب؟",
		a: "التسوق يتم عبر متجر زد. أضف المنتج للسلة وأكمل الطلب. لأي استفسار قبل الشراء راسلنا على واتساب."
	}
];
var CATEGORIES = [
	{
		id: "all",
		label: "الكل",
		match: null
	},
	{
		id: "wheat",
		label: "البر",
		match: "البر"
	},
	{
		id: "mixes",
		label: "الخلطات",
		match: "الخلطات"
	},
	{
		id: "other",
		label: "حبوب وبقول",
		match: "أخرى"
	},
	{
		id: "pantry",
		label: "السمن والعسل",
		match: "السمن والعسل"
	}
];
function ProductCard({ product, priceLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: product.url,
		target: "_blank",
		rel: "noreferrer",
		className: "group flex h-full flex-col overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-[var(--motion-fast)] ease-[var(--ease-out)] hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative aspect-square overflow-hidden bg-surface-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: product.image ?? "/images/millstone.jpg",
				alt: product.name,
				loading: "lazy",
				referrerPolicy: "no-referrer",
				className: "size-full object-cover transition-transform duration-[var(--motion-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
			}), !product.inStock ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute top-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 text-xs text-cream",
				children: "غير متوفر"
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-2 p-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-subtle",
					children: product.categories[0] ?? "المتجر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-medium leading-snug text-fg",
					children: product.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex items-center justify-between pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-sm text-muted",
						children: priceLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: cn("inline-flex items-center gap-1 text-xs text-primary", "opacity-80 group-hover:opacity-100"),
						children: ["اطلب", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, { className: "size-3.5" })]
					})]
				})
			]
		})]
	});
}
var PAGE = 12;
function Catalog() {
	const [query, setQuery] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("all");
	const [shown, setShown] = (0, import_react.useState)(PAGE);
	const filtered = (0, import_react.useMemo)(() => {
		const q = query.trim();
		return products.filter((p) => {
			const matchCat = cat === "all" || p.categories.includes(CATEGORIES.find((c) => c.id === cat)?.match ?? "");
			const matchQ = !q || p.name.includes(q);
			return matchCat && matchQ;
		});
	}, [query, cat]);
	const visible = filtered.slice(0, shown);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "products",
		className: "scroll-mt-24 px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-subtle",
					children: "المتجر"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[length:var(--text-title)] text-fg",
					children: "واحد وتسعون صنفاً من الطاحون"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-xl text-muted",
					children: "بر، خلطات، جريش، دخن، شوفان، سمن وعسل. الطلب يفتح صفحة المنتج في متجر زد مباشرة."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-8 flex flex-col gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative max-w-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-subtle" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: query,
							onChange: (e) => {
								setQuery(e.target.value);
								setShown(PAGE);
							},
							placeholder: "ابحث عن بر، خلطة، عسل…",
							className: "h-12 w-full rounded-[var(--radius-lg)] bg-surface pr-11 pl-4 text-sm text-fg shadow-[var(--shadow-border)] placeholder:text-subtle focus:outline-none focus:ring-2 focus:ring-ring"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-wrap gap-2",
						children: CATEGORIES.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => {
								setCat(item.id);
								setShown(PAGE);
							},
							className: cn("h-10 rounded-full px-4 text-sm transition-colors duration-[var(--motion-quick)]", cat === item.id ? "bg-primary text-primary-fg" : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg"),
							children: item.label
						}, item.id))
					})]
				}),
				visible.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-12 text-muted",
					children: "لا توجد منتجات مطابقة للبحث."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: visible.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
						product,
						priceLabel: formatPrice(product.price, product.hasOptions)
					}) }, product.id))
				}),
				shown < filtered.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => setShown((n) => n + PAGE),
						children: [
							"عرض المزيد (",
							filtered.length - shown,
							")"
						]
					})
				}) : null
			]
		})
	});
}
function Craft() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "craft",
		className: "scroll-mt-24 bg-ink px-4 py-20 text-cream sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[var(--radius-2xl)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/mill-workshop.jpg",
					alt: "طاحون حجري في ضوء النهار",
					className: "aspect-[4/3] w-full object-cover outline-none"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-cream/60",
					children: "كيف نطحن"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[length:var(--text-title)] text-cream",
					children: "الطاحون بيت، ليس رفّ سوبرماركت"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-cream/75",
					children: "أهلاً بك في طاحون الطيب حيث تُطحن الأصالة ليفوح عبق الجودة. لا نقدّم منتجاً جاهزاً من مصنع بعيد — نقدّم تجربة الجبل في كيس باسمه."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-8 space-y-6",
					children: [
						{
							n: "01",
							title: "انتقاء الأصل",
							text: "بر باسم منطقته وموسمه، من مزارعي المرتفعات لا من خلطات مجهولة."
						},
						{
							n: "02",
							title: "طحن الحبة كاملة",
							text: "القشرة والجنين واللب معاً — رغيف أثقل طعماً وأغنى غذاءً."
						},
						{
							n: "03",
							title: "خلطات على القياس",
							text: "من سبعة حبوب إلى خلطات السكر والدايت والخالية من الجلوتين."
						}
					].map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl text-cream/40",
							children: step.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-xl text-cream",
							children: step.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm leading-relaxed text-cream/70",
							children: step.text
						})] })]
					}, step.n))
				})
			] })]
		})
	});
}
function Faq() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "scroll-mt-24 bg-bg-deep px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-subtle",
					children: "أسئلة يتكرر طرحها"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[length:var(--text-title)] text-fg",
					children: "قبل أن تطلب"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 divide-y divide-border overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)]",
					children: FAQS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
						className: "group px-5 py-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
							className: "cursor-pointer list-none py-4 font-medium text-fg marker:content-none [&::-webkit-details-marker]:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center justify-between gap-4",
								children: [item.q, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-subtle transition-transform duration-[var(--motion-fast)] group-open:rotate-45",
									children: "+"
								})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "pb-4 text-sm leading-relaxed text-muted",
							children: item.a
						})]
					}, item.q))
				})
			]
		})
	});
}
function Featured() {
	const featured = FEATURED_SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter((p) => p != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-bg-deep px-4 py-20 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-subtle",
				children: "مختارات الطاحون"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-2 font-display text-[length:var(--text-title)] text-fg",
				children: "من أجود ما في البيت"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "outline",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: STORE_URL,
					target: "_blank",
					rel: "noreferrer",
					children: ["كل المتجر", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, {})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-4",
			children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product,
				priceLabel: formatPrice(product.price, product.hasOptions)
			}) }, product.id))
		})]
	});
}
function MillMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		"aria-hidden": "true",
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "29",
				stroke: "currentColor",
				strokeWidth: "1.5"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "18",
				stroke: "currentColor",
				strokeWidth: "1.25"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "32",
				cy: "32",
				r: "4",
				fill: "currentColor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
				stroke: "currentColor",
				strokeWidth: "1.25",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "39",
						y1: "32",
						x2: "48.5",
						y2: "32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "32",
						y1: "39",
						x2: "32",
						y2: "48.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "25",
						y1: "32",
						x2: "15.5",
						y2: "32"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "32",
						y1: "25",
						x2: "32",
						y2: "15.5"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "37",
						y1: "37",
						x2: "43.7",
						y2: "43.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "27",
						y1: "37",
						x2: "20.3",
						y2: "43.7"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "27",
						y1: "27",
						x2: "20.3",
						y2: "20.3"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
						x1: "37",
						y1: "27",
						x2: "43.7",
						y2: "20.3"
					})
				]
			})
		]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-ink text-cream",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-[1.2fr_0.8fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-10 items-center justify-center rounded-full bg-cream/10 text-cream",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MillMark, { className: "size-6" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl",
							children: STORE_NAME
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-md font-display text-xl text-cream/80",
						children: SLOGAN
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-lg text-sm leading-relaxed text-cream/60",
						children: "أهلاً بك في طاحون الطيب. تصفح المتجر واكتشف تشكيلة البر البلدي والعضوي والخلطات والعسل — أعددناها لتليق بمائدتك."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						variant: "inverse",
						className: "mt-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: STORE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: "افتح المتجر"
						})
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-8 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm tracking-wide text-cream/50",
						children: "تواصل"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `tel:${PHONE_TEL}`,
								className: "inline-flex items-center gap-2 text-cream/85 hover:text-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4" }), PHONE_DISPLAY]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/85 hover:text-cream",
								children: "واتساب"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${EMAIL}`,
								className: "inline-flex items-center gap-2 break-all text-cream/85 hover:text-cream",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0" }), EMAIL]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: TIKTOK_URL,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/85 hover:text-cream",
								children: "تيك توك @altieb_tahon"
							}) })
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm tracking-wide text-cream/50",
						children: "المتجر"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-4 space-y-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `${STORE_URL}categories/1622563/البر`,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/85 hover:text-cream",
								children: "البر"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `${STORE_URL}categories/1622564/الخلطات`,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/85 hover:text-cream",
								children: "الخلطات"
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `${STORE_URL}categories/1622566/السمن-والعسل`,
								target: "_blank",
								rel: "noreferrer",
								className: "text-cream/85 hover:text-cream",
								children: "السمن والعسل"
							}) })
						]
					})] })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-14 border-t border-cream/10 pt-6 text-xs text-cream/45",
				children: [STORE_NAME, " · المتجر على منصة زد · الشراء يتم عبر tahunaltayib.zid.store"]
			})]
		})
	});
}
var LINKS = [
	{
		href: "#origins",
		label: "المناطق"
	},
	{
		href: "#products",
		label: "المنتجات"
	},
	{
		href: "#craft",
		label: "الطاحون"
	},
	{
		href: "#faq",
		label: "أسئلة"
	}
];
function Header() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:h-[4.25rem] sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#top",
					className: "flex items-center gap-2.5 text-fg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "flex size-9 items-center justify-center rounded-full bg-surface-2 text-primary",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MillMark, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-xl leading-none",
						children: STORE_NAME
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-7 text-sm text-muted md:flex",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "transition-colors duration-[var(--motion-quick)] hover:text-fg",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						size: "sm",
						className: "hidden sm:inline-flex",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: STORE_URL,
							target: "_blank",
							rel: "noreferrer",
							children: "تسوق الآن"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "inline-flex size-11 items-center justify-center rounded-lg text-fg md:hidden",
						"aria-expanded": open,
						"aria-label": open ? "إغلاق القائمة" : "فتح القائمة",
						onClick: () => setOpen((v) => !v),
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border bg-bg px-4 py-4 md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				className: "flex flex-col gap-1",
				children: [LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: link.href,
					className: "rounded-lg px-3 py-3 text-base text-fg hover:bg-surface-2",
					onClick: () => setOpen(false),
					children: link.label
				}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-2 w-full",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: STORE_URL,
						target: "_blank",
						rel: "noreferrer",
						children: "تسوق من المتجر"
					})
				})]
			})
		}) : null]
	});
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate min-h-[min(92vh,52rem)] overflow-hidden bg-ink text-cream",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/images/asir-wheat.jpg",
				alt: "سنابل بر في مرتفعات عسير",
				className: "absolute inset-0 size-full object-cover object-center outline-none"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto flex min-h-[min(92vh,52rem)] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-4 text-sm text-cream/80",
						children: "طاحون حجري · بر بلدي وعضوي"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "max-w-3xl font-display text-[length:var(--text-display)] leading-[1.15] text-cream",
						children: "طاحون الطيب"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl font-display text-2xl leading-snug text-cream/90 sm:text-3xl",
						children: SLOGAN
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 max-w-lg text-base leading-relaxed text-cream/75 sm:text-lg",
						children: "بر الجبال السعودية يُطحن عندك طازجاً — من السودة والنماص وبللسمر والباحة إلى خلطات الخبز والعسل البلدي."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 flex flex-col gap-3 sm:flex-row sm:items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "inverse",
							size: "lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: STORE_URL,
								target: "_blank",
								rel: "noreferrer",
								children: ["تسوق من المتجر", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, {})]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							size: "lg",
							className: "border-cream/20 text-cream hover:bg-cream/10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: WHATSAPP_URL,
								target: "_blank",
								rel: "noreferrer",
								children: "اسأل على واتساب"
							})
						})]
					})
				]
			})
		]
	});
}
function Origins() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "origins",
		className: "scroll-mt-24 px-4 py-20 sm:px-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-subtle",
					children: "من أرضه"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[length:var(--text-title)] text-fg",
					children: "بر يُسمّى باسم جَبله"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "لا نخلط الأصول في كيس واحد. كل صنف يحمل اسم منطقته وموسمه: هلباء بللسمر غير قياضه، وبر السودة غير بر النماص. هذا هو الفرق."
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[var(--radius-2xl)] bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/asir-wheat.jpg",
					alt: "مدرجات البر في مرتفعات عسير",
					className: "aspect-[16/10] w-full object-cover outline-none"
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mx-auto mt-12 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3",
			children: ORIGINS.map((origin) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-[var(--radius-xl)] bg-surface p-5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-subtle",
						children: origin.region
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl text-fg",
						children: origin.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted",
						children: origin.note
					})
				]
			}, origin.name))
		})]
	});
}
var SLUGS = [
	"عسل-سدر-1-كيلو",
	"عسل-سمر-1-كيلو",
	"سمن-غنم-منجور-1-كيلو"
];
function Pantry() {
	const items = SLUGS.map((slug) => products.find((p) => p.slug === slug)).filter((p) => p != null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-20 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-[var(--radius-2xl)] bg-surface-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: "/images/honey-ghee.jpg",
					alt: "عسل بلدي وسمن غنم",
					className: "aspect-[4/3] w-full object-cover outline-none"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-subtle",
					children: "بيت المؤونة"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-[length:var(--text-title)] text-fg",
					children: "عسل سدر وسمر، وسمن غنم منجور"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted",
					children: "إلى جانب البر: عسل السدر والسمر وسمن الغنم — مؤونة المجلس والمائدة من المصدر نفسه."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-3",
					children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: item.url,
						target: "_blank",
						rel: "noreferrer",
						className: "flex items-center justify-between rounded-[var(--radius-lg)] bg-surface px-4 py-3.5 shadow-[var(--shadow-border)] transition-colors duration-[var(--motion-quick)] hover:bg-surface-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: item.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm text-muted",
							children: [formatPrice(item.price, item.hasOptions), !item.inStock ? " · نفد" : ""]
						})]
					}) }, item.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `${STORE_URL}categories/1622566/السمن-والعسل`,
						target: "_blank",
						rel: "noreferrer",
						children: ["قسم السمن والعسل", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpLeft, {})]
					})
				})
			] })]
		})
	});
}
function TrustBar() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4",
			children: PILLARS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "bg-surface px-6 py-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-xl text-fg",
					children: item.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm leading-relaxed text-muted",
					children: item.text
				})]
			}, item.title))
		})
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
		href: WHATSAPP_URL,
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "تواصل واتساب",
		className: "fixed bottom-5 left-5 z-40 inline-flex size-14 items-center justify-center rounded-full bg-[#1c8c4c] text-white shadow-[var(--shadow-border-hover)] transition-transform duration-[var(--motion-quick)] hover:scale-105",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			viewBox: "0 0 24 24",
			className: "size-7",
			fill: "currentColor",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.05 4.91A9.82 9.82 0 0 0 12.04 2C6.5 2 2 6.49 2 12.02c0 1.76.46 3.48 1.34 5L2 22l5.11-1.34a10 10 0 0 0 4.93 1.25h.01c5.54 0 10.04-4.49 10.04-10.02 0-2.68-1.04-5.19-2.94-7.08Zm-7.01 15.4h-.01a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.03.8.81-2.96-.2-.3a8.28 8.28 0 0 1-1.27-4.42c0-4.58 3.74-8.31 8.34-8.31 2.23 0 4.32.87 5.89 2.44a8.25 8.25 0 0 1 2.44 5.88c0 4.59-3.74 8.32-8.34 8.32Zm4.57-6.23c-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.12-.56.12-.17.25-.64.81-.79.98-.14.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.4-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.41-.56-.42h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.48-.6 1.69-1.19.21-.58.21-1.08.14-1.19-.06-.1-.23-.17-.48-.29Z" })
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrustBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Origins, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Featured, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Catalog, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Craft, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pantry, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Faq, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
		]
	});
}
//#endregion
export { Home as component };
