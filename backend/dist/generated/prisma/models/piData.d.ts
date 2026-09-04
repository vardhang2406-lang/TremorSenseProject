import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model piData
 *
 */
export type piDataModel = runtime.Types.Result.DefaultSelection<Prisma.$piDataPayload>;
export type AggregatePiData = {
    _count: PiDataCountAggregateOutputType | null;
    _avg: PiDataAvgAggregateOutputType | null;
    _sum: PiDataSumAggregateOutputType | null;
    _min: PiDataMinAggregateOutputType | null;
    _max: PiDataMaxAggregateOutputType | null;
};
export type PiDataAvgAggregateOutputType = {
    predicted_event: number | null;
};
export type PiDataSumAggregateOutputType = {
    predicted_event: number | null;
};
export type PiDataMinAggregateOutputType = {
    id: string | null;
    predicted_event: number | null;
    event_time: string | null;
    cues_triggered_inrealtime: string | null;
    pi_cane_id: string | null;
    created_at: Date | null;
};
export type PiDataMaxAggregateOutputType = {
    id: string | null;
    predicted_event: number | null;
    event_time: string | null;
    cues_triggered_inrealtime: string | null;
    pi_cane_id: string | null;
    created_at: Date | null;
};
export type PiDataCountAggregateOutputType = {
    id: number;
    predicted_event: number;
    event_time: number;
    cues_triggered_inrealtime: number;
    pi_cane_id: number;
    created_at: number;
    _all: number;
};
export type PiDataAvgAggregateInputType = {
    predicted_event?: true;
};
export type PiDataSumAggregateInputType = {
    predicted_event?: true;
};
export type PiDataMinAggregateInputType = {
    id?: true;
    predicted_event?: true;
    event_time?: true;
    cues_triggered_inrealtime?: true;
    pi_cane_id?: true;
    created_at?: true;
};
export type PiDataMaxAggregateInputType = {
    id?: true;
    predicted_event?: true;
    event_time?: true;
    cues_triggered_inrealtime?: true;
    pi_cane_id?: true;
    created_at?: true;
};
export type PiDataCountAggregateInputType = {
    id?: true;
    predicted_event?: true;
    event_time?: true;
    cues_triggered_inrealtime?: true;
    pi_cane_id?: true;
    created_at?: true;
    _all?: true;
};
export type PiDataAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which piData to aggregate.
     */
    where?: Prisma.piDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of piData to fetch.
     */
    orderBy?: Prisma.piDataOrderByWithRelationInput | Prisma.piDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.piDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` piData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` piData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned piData
    **/
    _count?: true | PiDataCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: PiDataAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: PiDataSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: PiDataMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: PiDataMaxAggregateInputType;
};
export type GetPiDataAggregateType<T extends PiDataAggregateArgs> = {
    [P in keyof T & keyof AggregatePiData]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePiData[P]> : Prisma.GetScalarType<T[P], AggregatePiData[P]>;
};
export type piDataGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.piDataWhereInput;
    orderBy?: Prisma.piDataOrderByWithAggregationInput | Prisma.piDataOrderByWithAggregationInput[];
    by: Prisma.PiDataScalarFieldEnum[] | Prisma.PiDataScalarFieldEnum;
    having?: Prisma.piDataScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PiDataCountAggregateInputType | true;
    _avg?: PiDataAvgAggregateInputType;
    _sum?: PiDataSumAggregateInputType;
    _min?: PiDataMinAggregateInputType;
    _max?: PiDataMaxAggregateInputType;
};
export type PiDataGroupByOutputType = {
    id: string;
    predicted_event: number | null;
    event_time: string | null;
    cues_triggered_inrealtime: string | null;
    pi_cane_id: string;
    created_at: Date;
    _count: PiDataCountAggregateOutputType | null;
    _avg: PiDataAvgAggregateOutputType | null;
    _sum: PiDataSumAggregateOutputType | null;
    _min: PiDataMinAggregateOutputType | null;
    _max: PiDataMaxAggregateOutputType | null;
};
export type GetPiDataGroupByPayload<T extends piDataGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PiDataGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PiDataGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PiDataGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PiDataGroupByOutputType[P]>;
}>>;
export type piDataWhereInput = {
    AND?: Prisma.piDataWhereInput | Prisma.piDataWhereInput[];
    OR?: Prisma.piDataWhereInput[];
    NOT?: Prisma.piDataWhereInput | Prisma.piDataWhereInput[];
    id?: Prisma.StringFilter<"piData"> | string;
    predicted_event?: Prisma.IntNullableFilter<"piData"> | number | null;
    event_time?: Prisma.StringNullableFilter<"piData"> | string | null;
    cues_triggered_inrealtime?: Prisma.StringNullableFilter<"piData"> | string | null;
    pi_cane_id?: Prisma.StringFilter<"piData"> | string;
    created_at?: Prisma.DateTimeFilter<"piData"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type piDataOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    predicted_event?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    cues_triggered_inrealtime?: Prisma.SortOrderInput | Prisma.SortOrder;
    pi_cane_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
};
export type piDataWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    pi_cane_id?: string;
    AND?: Prisma.piDataWhereInput | Prisma.piDataWhereInput[];
    OR?: Prisma.piDataWhereInput[];
    NOT?: Prisma.piDataWhereInput | Prisma.piDataWhereInput[];
    predicted_event?: Prisma.IntNullableFilter<"piData"> | number | null;
    event_time?: Prisma.StringNullableFilter<"piData"> | string | null;
    cues_triggered_inrealtime?: Prisma.StringNullableFilter<"piData"> | string | null;
    created_at?: Prisma.DateTimeFilter<"piData"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "id" | "pi_cane_id">;
export type piDataOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    predicted_event?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    cues_triggered_inrealtime?: Prisma.SortOrderInput | Prisma.SortOrder;
    pi_cane_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.piDataCountOrderByAggregateInput;
    _avg?: Prisma.piDataAvgOrderByAggregateInput;
    _max?: Prisma.piDataMaxOrderByAggregateInput;
    _min?: Prisma.piDataMinOrderByAggregateInput;
    _sum?: Prisma.piDataSumOrderByAggregateInput;
};
export type piDataScalarWhereWithAggregatesInput = {
    AND?: Prisma.piDataScalarWhereWithAggregatesInput | Prisma.piDataScalarWhereWithAggregatesInput[];
    OR?: Prisma.piDataScalarWhereWithAggregatesInput[];
    NOT?: Prisma.piDataScalarWhereWithAggregatesInput | Prisma.piDataScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"piData"> | string;
    predicted_event?: Prisma.IntNullableWithAggregatesFilter<"piData"> | number | null;
    event_time?: Prisma.StringNullableWithAggregatesFilter<"piData"> | string | null;
    cues_triggered_inrealtime?: Prisma.StringNullableWithAggregatesFilter<"piData"> | string | null;
    pi_cane_id?: Prisma.StringWithAggregatesFilter<"piData"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"piData"> | Date | string;
};
export type piDataCreateInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    created_at?: Date | string;
    user: Prisma.userCreateNestedOneWithoutPiData_outputInput;
};
export type piDataUncheckedCreateInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    pi_cane_id: string;
    created_at?: Date | string;
};
export type piDataUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutPiData_outputNestedInput;
};
export type piDataUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pi_cane_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type piDataCreateManyInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    pi_cane_id: string;
    created_at?: Date | string;
};
export type piDataUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type piDataUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    pi_cane_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PiDataListRelationFilter = {
    every?: Prisma.piDataWhereInput;
    some?: Prisma.piDataWhereInput;
    none?: Prisma.piDataWhereInput;
};
export type piDataOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type piDataCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predicted_event?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    cues_triggered_inrealtime?: Prisma.SortOrder;
    pi_cane_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type piDataAvgOrderByAggregateInput = {
    predicted_event?: Prisma.SortOrder;
};
export type piDataMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predicted_event?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    cues_triggered_inrealtime?: Prisma.SortOrder;
    pi_cane_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type piDataMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    predicted_event?: Prisma.SortOrder;
    event_time?: Prisma.SortOrder;
    cues_triggered_inrealtime?: Prisma.SortOrder;
    pi_cane_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type piDataSumOrderByAggregateInput = {
    predicted_event?: Prisma.SortOrder;
};
export type piDataCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput> | Prisma.piDataCreateWithoutUserInput[] | Prisma.piDataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.piDataCreateOrConnectWithoutUserInput | Prisma.piDataCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.piDataCreateManyUserInputEnvelope;
    connect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
};
export type piDataUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput> | Prisma.piDataCreateWithoutUserInput[] | Prisma.piDataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.piDataCreateOrConnectWithoutUserInput | Prisma.piDataCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.piDataCreateManyUserInputEnvelope;
    connect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
};
export type piDataUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput> | Prisma.piDataCreateWithoutUserInput[] | Prisma.piDataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.piDataCreateOrConnectWithoutUserInput | Prisma.piDataCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.piDataUpsertWithWhereUniqueWithoutUserInput | Prisma.piDataUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.piDataCreateManyUserInputEnvelope;
    set?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    disconnect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    delete?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    connect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    update?: Prisma.piDataUpdateWithWhereUniqueWithoutUserInput | Prisma.piDataUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.piDataUpdateManyWithWhereWithoutUserInput | Prisma.piDataUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.piDataScalarWhereInput | Prisma.piDataScalarWhereInput[];
};
export type piDataUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput> | Prisma.piDataCreateWithoutUserInput[] | Prisma.piDataUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.piDataCreateOrConnectWithoutUserInput | Prisma.piDataCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.piDataUpsertWithWhereUniqueWithoutUserInput | Prisma.piDataUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.piDataCreateManyUserInputEnvelope;
    set?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    disconnect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    delete?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    connect?: Prisma.piDataWhereUniqueInput | Prisma.piDataWhereUniqueInput[];
    update?: Prisma.piDataUpdateWithWhereUniqueWithoutUserInput | Prisma.piDataUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.piDataUpdateManyWithWhereWithoutUserInput | Prisma.piDataUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.piDataScalarWhereInput | Prisma.piDataScalarWhereInput[];
};
export type piDataCreateWithoutUserInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    created_at?: Date | string;
};
export type piDataUncheckedCreateWithoutUserInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    created_at?: Date | string;
};
export type piDataCreateOrConnectWithoutUserInput = {
    where: Prisma.piDataWhereUniqueInput;
    create: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput>;
};
export type piDataCreateManyUserInputEnvelope = {
    data: Prisma.piDataCreateManyUserInput | Prisma.piDataCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type piDataUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.piDataWhereUniqueInput;
    update: Prisma.XOR<Prisma.piDataUpdateWithoutUserInput, Prisma.piDataUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.piDataCreateWithoutUserInput, Prisma.piDataUncheckedCreateWithoutUserInput>;
};
export type piDataUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.piDataWhereUniqueInput;
    data: Prisma.XOR<Prisma.piDataUpdateWithoutUserInput, Prisma.piDataUncheckedUpdateWithoutUserInput>;
};
export type piDataUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.piDataScalarWhereInput;
    data: Prisma.XOR<Prisma.piDataUpdateManyMutationInput, Prisma.piDataUncheckedUpdateManyWithoutUserInput>;
};
export type piDataScalarWhereInput = {
    AND?: Prisma.piDataScalarWhereInput | Prisma.piDataScalarWhereInput[];
    OR?: Prisma.piDataScalarWhereInput[];
    NOT?: Prisma.piDataScalarWhereInput | Prisma.piDataScalarWhereInput[];
    id?: Prisma.StringFilter<"piData"> | string;
    predicted_event?: Prisma.IntNullableFilter<"piData"> | number | null;
    event_time?: Prisma.StringNullableFilter<"piData"> | string | null;
    cues_triggered_inrealtime?: Prisma.StringNullableFilter<"piData"> | string | null;
    pi_cane_id?: Prisma.StringFilter<"piData"> | string;
    created_at?: Prisma.DateTimeFilter<"piData"> | Date | string;
};
export type piDataCreateManyUserInput = {
    id?: string;
    predicted_event?: number | null;
    event_time?: string | null;
    cues_triggered_inrealtime?: string | null;
    created_at?: Date | string;
};
export type piDataUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type piDataUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type piDataUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    predicted_event?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    event_time?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    cues_triggered_inrealtime?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type piDataSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predicted_event?: boolean;
    event_time?: boolean;
    cues_triggered_inrealtime?: boolean;
    pi_cane_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piData"]>;
export type piDataSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predicted_event?: boolean;
    event_time?: boolean;
    cues_triggered_inrealtime?: boolean;
    pi_cane_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piData"]>;
export type piDataSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    predicted_event?: boolean;
    event_time?: boolean;
    cues_triggered_inrealtime?: boolean;
    pi_cane_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["piData"]>;
export type piDataSelectScalar = {
    id?: boolean;
    predicted_event?: boolean;
    event_time?: boolean;
    cues_triggered_inrealtime?: boolean;
    pi_cane_id?: boolean;
    created_at?: boolean;
};
export type piDataOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "predicted_event" | "event_time" | "cues_triggered_inrealtime" | "pi_cane_id" | "created_at", ExtArgs["result"]["piData"]>;
export type piDataInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type piDataIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type piDataIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $piDataPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "piData";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        predicted_event: number | null;
        event_time: string | null;
        cues_triggered_inrealtime: string | null;
        pi_cane_id: string;
        created_at: Date;
    }, ExtArgs["result"]["piData"]>;
    composites: {};
};
export type piDataGetPayload<S extends boolean | null | undefined | piDataDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$piDataPayload, S>;
export type piDataCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<piDataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PiDataCountAggregateInputType | true;
};
export interface piDataDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['piData'];
        meta: {
            name: 'piData';
        };
    };
    /**
     * Find zero or one PiData that matches the filter.
     * @param {piDataFindUniqueArgs} args - Arguments to find a PiData
     * @example
     * // Get one PiData
     * const piData = await prisma.piData.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends piDataFindUniqueArgs>(args: Prisma.SelectSubset<T, piDataFindUniqueArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one PiData that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {piDataFindUniqueOrThrowArgs} args - Arguments to find a PiData
     * @example
     * // Get one PiData
     * const piData = await prisma.piData.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends piDataFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, piDataFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PiData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataFindFirstArgs} args - Arguments to find a PiData
     * @example
     * // Get one PiData
     * const piData = await prisma.piData.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends piDataFindFirstArgs>(args?: Prisma.SelectSubset<T, piDataFindFirstArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first PiData that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataFindFirstOrThrowArgs} args - Arguments to find a PiData
     * @example
     * // Get one PiData
     * const piData = await prisma.piData.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends piDataFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, piDataFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more PiData that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PiData
     * const piData = await prisma.piData.findMany()
     *
     * // Get first 10 PiData
     * const piData = await prisma.piData.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const piDataWithIdOnly = await prisma.piData.findMany({ select: { id: true } })
     *
     */
    findMany<T extends piDataFindManyArgs>(args?: Prisma.SelectSubset<T, piDataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a PiData.
     * @param {piDataCreateArgs} args - Arguments to create a PiData.
     * @example
     * // Create one PiData
     * const PiData = await prisma.piData.create({
     *   data: {
     *     // ... data to create a PiData
     *   }
     * })
     *
     */
    create<T extends piDataCreateArgs>(args: Prisma.SelectSubset<T, piDataCreateArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many PiData.
     * @param {piDataCreateManyArgs} args - Arguments to create many PiData.
     * @example
     * // Create many PiData
     * const piData = await prisma.piData.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends piDataCreateManyArgs>(args?: Prisma.SelectSubset<T, piDataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many PiData and returns the data saved in the database.
     * @param {piDataCreateManyAndReturnArgs} args - Arguments to create many PiData.
     * @example
     * // Create many PiData
     * const piData = await prisma.piData.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many PiData and only return the `id`
     * const piDataWithIdOnly = await prisma.piData.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends piDataCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, piDataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a PiData.
     * @param {piDataDeleteArgs} args - Arguments to delete one PiData.
     * @example
     * // Delete one PiData
     * const PiData = await prisma.piData.delete({
     *   where: {
     *     // ... filter to delete one PiData
     *   }
     * })
     *
     */
    delete<T extends piDataDeleteArgs>(args: Prisma.SelectSubset<T, piDataDeleteArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one PiData.
     * @param {piDataUpdateArgs} args - Arguments to update one PiData.
     * @example
     * // Update one PiData
     * const piData = await prisma.piData.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends piDataUpdateArgs>(args: Prisma.SelectSubset<T, piDataUpdateArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more PiData.
     * @param {piDataDeleteManyArgs} args - Arguments to filter PiData to delete.
     * @example
     * // Delete a few PiData
     * const { count } = await prisma.piData.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends piDataDeleteManyArgs>(args?: Prisma.SelectSubset<T, piDataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PiData
     * const piData = await prisma.piData.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends piDataUpdateManyArgs>(args: Prisma.SelectSubset<T, piDataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more PiData and returns the data updated in the database.
     * @param {piDataUpdateManyAndReturnArgs} args - Arguments to update many PiData.
     * @example
     * // Update many PiData
     * const piData = await prisma.piData.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more PiData and only return the `id`
     * const piDataWithIdOnly = await prisma.piData.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends piDataUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, piDataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one PiData.
     * @param {piDataUpsertArgs} args - Arguments to update or create a PiData.
     * @example
     * // Update or create a PiData
     * const piData = await prisma.piData.upsert({
     *   create: {
     *     // ... data to create a PiData
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PiData we want to update
     *   }
     * })
     */
    upsert<T extends piDataUpsertArgs>(args: Prisma.SelectSubset<T, piDataUpsertArgs<ExtArgs>>): Prisma.Prisma__piDataClient<runtime.Types.Result.GetResult<Prisma.$piDataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of PiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataCountArgs} args - Arguments to filter PiData to count.
     * @example
     * // Count the number of PiData
     * const count = await prisma.piData.count({
     *   where: {
     *     // ... the filter for the PiData we want to count
     *   }
     * })
    **/
    count<T extends piDataCountArgs>(args?: Prisma.Subset<T, piDataCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PiDataCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a PiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PiDataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PiDataAggregateArgs>(args: Prisma.Subset<T, PiDataAggregateArgs>): Prisma.PrismaPromise<GetPiDataAggregateType<T>>;
    /**
     * Group by PiData.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {piDataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends piDataGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: piDataGroupByArgs['orderBy'];
    } : {
        orderBy?: piDataGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, piDataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPiDataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the piData model
     */
    readonly fields: piDataFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for piData.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__piDataClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.userDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.userDefaultArgs<ExtArgs>>): Prisma.Prisma__userClient<runtime.Types.Result.GetResult<Prisma.$userPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the piData model
 */
export interface piDataFieldRefs {
    readonly id: Prisma.FieldRef<"piData", 'String'>;
    readonly predicted_event: Prisma.FieldRef<"piData", 'Int'>;
    readonly event_time: Prisma.FieldRef<"piData", 'String'>;
    readonly cues_triggered_inrealtime: Prisma.FieldRef<"piData", 'String'>;
    readonly pi_cane_id: Prisma.FieldRef<"piData", 'String'>;
    readonly created_at: Prisma.FieldRef<"piData", 'DateTime'>;
}
/**
 * piData findUnique
 */
export type piDataFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter, which piData to fetch.
     */
    where: Prisma.piDataWhereUniqueInput;
};
/**
 * piData findUniqueOrThrow
 */
export type piDataFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter, which piData to fetch.
     */
    where: Prisma.piDataWhereUniqueInput;
};
/**
 * piData findFirst
 */
export type piDataFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter, which piData to fetch.
     */
    where?: Prisma.piDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of piData to fetch.
     */
    orderBy?: Prisma.piDataOrderByWithRelationInput | Prisma.piDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for piData.
     */
    cursor?: Prisma.piDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` piData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` piData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of piData.
     */
    distinct?: Prisma.PiDataScalarFieldEnum | Prisma.PiDataScalarFieldEnum[];
};
/**
 * piData findFirstOrThrow
 */
export type piDataFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter, which piData to fetch.
     */
    where?: Prisma.piDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of piData to fetch.
     */
    orderBy?: Prisma.piDataOrderByWithRelationInput | Prisma.piDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for piData.
     */
    cursor?: Prisma.piDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` piData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` piData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of piData.
     */
    distinct?: Prisma.PiDataScalarFieldEnum | Prisma.PiDataScalarFieldEnum[];
};
/**
 * piData findMany
 */
export type piDataFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter, which piData to fetch.
     */
    where?: Prisma.piDataWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of piData to fetch.
     */
    orderBy?: Prisma.piDataOrderByWithRelationInput | Prisma.piDataOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing piData.
     */
    cursor?: Prisma.piDataWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` piData from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` piData.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of piData.
     */
    distinct?: Prisma.PiDataScalarFieldEnum | Prisma.PiDataScalarFieldEnum[];
};
/**
 * piData create
 */
export type piDataCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * The data needed to create a piData.
     */
    data: Prisma.XOR<Prisma.piDataCreateInput, Prisma.piDataUncheckedCreateInput>;
};
/**
 * piData createMany
 */
export type piDataCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many piData.
     */
    data: Prisma.piDataCreateManyInput | Prisma.piDataCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * piData createManyAndReturn
 */
export type piDataCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * The data used to create many piData.
     */
    data: Prisma.piDataCreateManyInput | Prisma.piDataCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * piData update
 */
export type piDataUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * The data needed to update a piData.
     */
    data: Prisma.XOR<Prisma.piDataUpdateInput, Prisma.piDataUncheckedUpdateInput>;
    /**
     * Choose, which piData to update.
     */
    where: Prisma.piDataWhereUniqueInput;
};
/**
 * piData updateMany
 */
export type piDataUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update piData.
     */
    data: Prisma.XOR<Prisma.piDataUpdateManyMutationInput, Prisma.piDataUncheckedUpdateManyInput>;
    /**
     * Filter which piData to update
     */
    where?: Prisma.piDataWhereInput;
    /**
     * Limit how many piData to update.
     */
    limit?: number;
};
/**
 * piData updateManyAndReturn
 */
export type piDataUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * The data used to update piData.
     */
    data: Prisma.XOR<Prisma.piDataUpdateManyMutationInput, Prisma.piDataUncheckedUpdateManyInput>;
    /**
     * Filter which piData to update
     */
    where?: Prisma.piDataWhereInput;
    /**
     * Limit how many piData to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * piData upsert
 */
export type piDataUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * The filter to search for the piData to update in case it exists.
     */
    where: Prisma.piDataWhereUniqueInput;
    /**
     * In case the piData found by the `where` argument doesn't exist, create a new piData with this data.
     */
    create: Prisma.XOR<Prisma.piDataCreateInput, Prisma.piDataUncheckedCreateInput>;
    /**
     * In case the piData was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.piDataUpdateInput, Prisma.piDataUncheckedUpdateInput>;
};
/**
 * piData delete
 */
export type piDataDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
    /**
     * Filter which piData to delete.
     */
    where: Prisma.piDataWhereUniqueInput;
};
/**
 * piData deleteMany
 */
export type piDataDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which piData to delete
     */
    where?: Prisma.piDataWhereInput;
    /**
     * Limit how many piData to delete.
     */
    limit?: number;
};
/**
 * piData without action
 */
export type piDataDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the piData
     */
    select?: Prisma.piDataSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the piData
     */
    omit?: Prisma.piDataOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.piDataInclude<ExtArgs> | null;
};
//# sourceMappingURL=piData.d.ts.map