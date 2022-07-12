import { forwardRef } from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

const MyLink = forwardRef((props, ref) => {
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a ref={ref} {...rest}>
        {children}
      </a>
    </Link>
  );
});

export default function Dropdown() {
  return (
    <Menu>
      <Menu.Button>
        <i className="bx bx-menu text-4xl text-white"></i>
      </Menu.Button>
      <Menu.Items className="bg-slate-100 rounded-2xl z-50">
        {/* Use the `active` render prop to conditionally style the active item. */}
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="/#about"
            >
              About
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="/#services"
            >
              Services
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="/#work"
            >
              Work
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="/#blog"
            >
              Blog
            </MyLink>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <MyLink
              className={`${
                active ? "bg-violet-500 text-white" : "text-gray-900"
              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
              href="/#contact"
            >
              Contact
            </MyLink>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

MyLink.displayName = "MyLink";
