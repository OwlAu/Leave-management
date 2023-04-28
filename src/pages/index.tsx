import { Inter } from "next/font/google";
import Link from "next/link";
import React, { Ref, useState } from "react";
import { Column, useTable, useFlexLayout, useResizeColumns } from "react-table";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formData, setFormData] = useState([]);

  //Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const items = formData;

  const lastPage = Math.ceil(items.length / itemsPerPage);

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;
  let currentItems = items.length > 0 ? items.slice(firstIndex, lastIndex) : [];
  //Pagincation

  //Table
  interface Data {
    id: string;
    walletAccNo: string;
    walletCd: string;
    merchantCd: string;
    isAgentWallet: string;
    agentDepositComm: string;
    agentWithdrawalComm: string;
    status: string;
  }

  const columns = React.useMemo<Column<Data>[]>(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Wallet Account No",
        accessor: "walletAccNo",
      },
      {
        Header: "Wallet Code",
        accessor: "walletCd",
      },
      {
        Header: "Merchant Code",
        accessor: "merchantCd",
      },
      {
        Header: "Is Agent Wallet",
        accessor: "isAgentWallet",
      },
      {
        Header: "Agent Deposit Commission",
        accessor: "agentDepositComm",
      },
      {
        Header: "Agent Withdrawal Commission",
        accessor: "agentWithdrawalComm",
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "Action",
        accessor: (row: any) => {
          return (
            <Link
              href={"/wallet/assignment/edit/" + row.id}
              // state={row}
              className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1"
            >
              Click here!
            </Link>
          );
        },
      },
    ],
    []
  );
  interface TableProps {
    columns: Column<Data>[];
    data: Data[];
  }

  interface CheckboxProps {
    indeterminate?: boolean;
    [x: string]: any;
  }

  type Props = React.InputHTMLAttributes<HTMLInputElement> & {
    indeterminate?: boolean;
  };

  const IndeterminateCheckbox = React.forwardRef<
    HTMLInputElement,
    CheckboxProps
  >(({ indeterminate, ...rest }: Props, ref: Ref<HTMLInputElement>) => {
    const defaultRef = React.useRef<HTMLInputElement>(null);
    const resolvedRef: any = ref || defaultRef;

    React.useEffect(() => {
      if (resolvedRef.current) {
        resolvedRef.current.indeterminate = indeterminate || false;
      }
    }, [resolvedRef, indeterminate]);

    return (
      <input
        className="form-check-input me-3"
        type="checkbox"
        ref={resolvedRef}
        {...rest}
      />
    );
  });

  function Table({ columns, data }: TableProps) {
    const defaultColumn = React.useMemo(
      () => ({
        minWidth: 30,
        width: 200,
        maxWidth: 400,
      }),
      []
    );

    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
      state,
      allColumns,
      getToggleHideAllColumnsProps,
    } = useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFlexLayout,
      useResizeColumns
    );

    return (
      <>
        <div>
          <div className="card card-custom w-96 p-5">
            <div className="table-responsive mb-5">
              <div
                {...getTableProps()}
                className="table"
                style={{ width: "100%" }}
              >
                <div>
                  {headerGroups.map((headerGroup) => (
                    <div
                      {...headerGroup.getHeaderGroupProps()}
                      className="tr fw-bold fs-6 border-bottom border-gray-200 text-gray-800"
                    >
                      {headerGroup.headers.map((column) => (
                        <div {...column.getHeaderProps()} className="th">
                          {column.render("Header")}
                          {/* Use column.getResizerProps to hook up the events correctly */}
                          <div
                            {...(column as any).getResizerProps()}
                            className={`resizer ${
                              (column as any).isResizing ? "isResizing" : ""
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  ))}
                </div>

                <div {...getTableBodyProps()}>
                  {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <div {...row.getRowProps()} className="tr">
                        {row.cells.map((cell) => {
                          return (
                            <div {...cell.getCellProps()} className="td">
                              {cell.render("Cell")}
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  //Table::END

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6 xl:p-10">
        <div className="col-span-1 flex justify-between md:col-span-2 lg:col-span-4">
          <h2 className="text-xs font-bold tracking-wide text-gray-700 md:text-sm md:tracking-wider">
            My Leaves
          </h2>
          <a href="#" className="text-xs font-semibold uppercase text-gray-800">
            More
          </a>
        </div>

        <div className="rounded-xl border border-gray-50 bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <p className="text-xs tracking-wide text-gray-600">
                Annual Leave
              </p>
              <h3 className="mt-1 text-lg font-bold text-green-500">
                100 Days
              </h3>
              <span className="mt-4 text-xs text-gray-500">
                Expired at 2023 April 01
              </span>
            </div>
            <div className="rounded-md bg-green-500 p-2 md:p-1 xl:p-2">
              <svg
                fill="#ffffff"
                width="45px"
                height="45px"
                viewBox="0 0 1024 1024"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M442.458 506.633l526.285 319.386c9.669 5.868 22.265 2.786 28.133-6.883s2.786-22.265-6.883-28.133L463.708 471.617c-9.669-5.868-22.265-2.786-28.133 6.883s-2.786 22.265 6.883 28.133z"></path>
                  <path d="M471.605 496.4c69.645-88.617 219.439-102.62 347.816-28.496 132.967 76.763 194.927 220.077 144.852 325.443-4.855 10.216-.509 22.433 9.706 27.288s22.433.509 27.288-9.706c60.149-126.562-11.322-291.875-161.366-378.497-144.745-83.575-317.1-67.463-400.501 38.659-6.989 8.893-5.446 21.768 3.447 28.757s21.768 5.446 28.757-3.447z"></path>
                  <path d="M684.302 659.986L486.25 992.53c-5.788 9.718-2.602 22.288 7.116 28.075s22.288 2.602 28.075-7.116l198.052-332.544c5.788-9.718 2.602-22.288-7.116-28.075s-22.288-2.602-28.075 7.116zm159.905-278.013l-27.699 47.974c-5.656 9.795-2.3 22.321 7.496 27.976s22.321 2.3 27.976-7.496l27.699-47.974c5.656-9.795 2.3-22.321-7.496-27.976s-22.321-2.3-27.976 7.496zm-518.698-143.64c0-46.166-37.423-83.589-83.589-83.589s-83.589 37.423-83.589 83.589 37.423 83.589 83.589 83.589 83.589-37.423 83.589-83.589zm40.96 0c0 68.788-55.761 124.549-124.549 124.549s-124.549-55.761-124.549-124.549c0-68.788 55.761-124.549 124.549-124.549s124.549 55.761 124.549 124.549zM221.44 20.48h40.96V51.2h-40.96V20.48zM262.4 51.2c0 27.307-40.96 27.307-40.96 0V20.48c0-27.307 40.96-27.307 40.96 0V51.2zm-40.96 381.44h40.96v30.72h-40.96v-30.72zm40.96 30.72c0 27.307-40.96 27.307-40.96 0v-30.72c0-27.307 40.96-27.307 40.96 0v30.72zM70.853 99.817l28.963-28.963 21.729 21.729-28.963 28.963-21.729-21.729zm50.693-7.234c19.309 19.309-9.654 48.272-28.963 28.963L70.854 99.817c-19.309-19.309 9.654-48.272 28.963-28.963l21.729 21.729zm240.748 298.674l28.963-28.963 21.729 21.729-28.963 28.963-21.729-21.729zm50.693-7.234c19.309 19.309-9.654 48.272-28.963 28.963l-21.729-21.729c-19.309-19.309 9.654-48.272 28.963-28.963l21.729 21.729zM20.48 262.4v-40.96H51.2v40.96H20.48zm30.72-40.96c27.307 0 27.307 40.96 0 40.96H20.48c-27.307 0-27.307-40.96 0-40.96H51.2zm412.16 0c27.307 0 27.307 40.96 0 40.96h-30.72c-27.307 0-27.307-40.96 0-40.96h30.72zM92.583 362.294c19.309-19.309 48.272 9.654 28.963 28.963l-21.729 21.729c-19.309 19.309-48.272-9.654-28.963-28.963l21.729-21.729zm291.44-291.441c19.309-19.309 48.272 9.654 28.963 28.963l-21.729 21.729c-19.309 19.309-48.272-9.654-28.963-28.963l21.729-21.729z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-50 bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <p className="text-xs tracking-wide text-gray-600">
                Medical Leave
              </p>
              <h3 className="mt-1 text-lg font-bold text-rose-500">100 Days</h3>
              <span className="mt-4 text-xs text-gray-600">
                Expired at 2023 April 01
              </span>
            </div>
            <div className="rounded-md bg-rose-500 p-2 md:p-1 xl:p-2">
              <svg
                fill="#ffffff"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M20,5.5H4a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V8.5A3,3,0,0,0,20,5.5ZM21,19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V8.5a1,1,0,0,1,1-1H20a1,1,0,0,1,1,1ZM7,3A1,1,0,0,1,8,2h8a1,1,0,0,1,0,2H8A1,1,0,0,1,7,3Zm6,9.75h2v2H13v2H11v-2H9v-2h2v-2h2Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-50 bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <p className="text-xs tracking-wide text-gray-600">
                Replacement Leaves
              </p>
              <h3 className="mt-1 text-lg font-bold text-indigo-500">
                100 Days
              </h3>
              <span className="mt-4 text-xs text-gray-500">
                Expired at 2023 April 01
              </span>
            </div>
            <div className="rounded-md bg-indigo-500 p-2 md:p-1 xl:p-2">
              {/* <svg
                fill="#ffffff"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M9,11.71l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,9.54,8.29l-.29.3L9,8.29A1,1,0,1,0,7.54,9.71l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0Zm-.6,3.62a1,1,0,0,0-.13,1.4,1,1,0,0,0,1.41.13,3.76,3.76,0,0,1,4.72,0,1,1,0,0,0,1.41-.13,1,1,0,0,0-.13-1.4A5.81,5.81,0,0,0,8.36,15.33ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17,8.29a1,1,0,0,0-1.42,0l-.29.3L15,8.29a1,1,0,0,0-1.42,1.42l.3.29-.3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l.29-.3.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-.3-.29.3-.29A1,1,0,0,0,17,8.29Z"></path>
                </g>
              </svg> */}
              <svg
                fill="#ffffff"
                width="45px"
                height="45px"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M16,7a2,2,0,1,0-2-2A2,2,0,0,0,16,7ZM12.7,18.4A4,4,0,1,1,9.05,12a1,1,0,1,0-.22-2A6,6,0,0,0,9.5,22a6,6,0,0,0,4.8-2.4,1,1,0,0,0-1.6-1.2ZM19.5,20h-1V15a1,1,0,0,0-1-1H12.93l1.69-4.66s0-.07,0-.11l0-.2a1.1,1.1,0,0,0,0-.18,1.06,1.06,0,0,0,0-.19,1.4,1.4,0,0,0-.09-.17.72.72,0,0,0-.11-.15.64.64,0,0,0-.15-.13s0-.06-.08-.08L9.71,5.55l-.12,0a1.06,1.06,0,0,0-.19-.06H9a.8.8,0,0,0-.2.07l-.11,0L6,7.13A1,1,0,0,0,6.48,9,1,1,0,0,0,7,8.87l2.23-1.3,3.24,1.88-1.89,5.21a.88.88,0,0,0,0,.16.58.58,0,0,0,0,.18,0,0,0,0,0,0,0,3,3,0,0,0,.08.38l.11.15a.57.57,0,0,0,.11.16.67.67,0,0,0,.14.09,1.22,1.22,0,0,0,.19.12h0a1,1,0,0,0,.34.06h5v5a1,1,0,0,0,1,1h2a1,1,0,0,0,0-2Z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-gray-50 bg-white p-6">
          <div className="flex items-start justify-between">
            <div className="flex flex-col">
              <p className="text-xs tracking-wide text-gray-600">Bonus Leave</p>
              <h3 className="mt-1 text-lg font-bold text-yellow-500">
                100 Days
              </h3>
              <span className="mt-4 text-xs text-gray-500">
                Expired at 2023 April 01
              </span>
            </div>
            <div className="rounded-md bg-yellow-500 p-2 md:p-1 xl:p-2">
              <svg
                fill="#ffffff"
                height="45px"
                width="45px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 254.3 256"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M140.4,18.6c-12.2,0-22.1,9.9-22.1,22.1s9.9,22.1,22.1,22.1s22.1-9.9,22.1-22.1S152.6,18.6,140.4,18.6z M225.4,56.3 l-69.2,42.3L147.3,206c-0.5,7.1-6.5,12.6-13.6,12.6c-0.3,0-0.6,0-0.9,0l-43-2.7c-2.7-0.2-5.2-1.1-7.3-2.7l23.5-23.6l15.1,0.9 l1.5-21.4h-7.4l-38.4,38.6c-2.7,2.6-6.1,4-9.6,4c-3.4,0-6.8-1.3-9.5-3.8l-30.4-29.4c-5.4-5.2-5.5-13.8-0.3-19.2 c5.2-5.4,13.8-5.5,19.2-0.3L67.1,179l25.7-25.8l6.7-70L53,20.8c-3.9-5.2-2.8-12.6,2.4-16.4c5.2-3.9,12.6-2.8,16.4,2.4l42.7,57.2 l36.9,10l61.7-37.7c5.5-3.4,12.8-1.6,16.2,3.9C232.7,45.7,230.9,52.9,225.4,56.3z M92.2,226.4h7.9v19.7h-7.9V226.4z M76.5,226.4h7.9 V254h-7.9V226.4z M60.7,226.4h7.9v19.7h-7.9V226.4z"></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="gap-4 px-4 md:grid-cols-2 lg:grid-cols-4 xl:gap-6 xl:p-10">
        <div className="col-span-1 flex justify-between md:col-span-2 lg:col-span-4">
          <h2 className="text-xs font-bold tracking-wide text-gray-700 md:text-sm md:tracking-wider">
            My Applications
          </h2>
        </div>

        <Table
          columns={columns}
          data={currentItems == undefined ? [] : currentItems}
        />
      </div>
    </div>
  );
}
