import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model dashboard
 *
 */
export type dashboardModel = runtime.Types.Result.DefaultSelection<Prisma.$dashboardPayload>;
export type AggregateDashboard = {
    _count: DashboardCountAggregateOutputType | null;
    _avg: DashboardAvgAggregateOutputType | null;
    _sum: DashboardSumAggregateOutputType | null;
    _min: DashboardMinAggregateOutputType | null;
    _max: DashboardMaxAggregateOutputType | null;
};
export type DashboardAvgAggregateOutputType = {
    fog_episodes_today: number | null;
    avg_lead_time: number | null;
    steps_today: number | null;
    gait_stability: number | null;
};
export type DashboardSumAggregateOutputType = {
    fog_episodes_today: number | null;
    avg_lead_time: number | null;
    steps_today: bigint | null;
    gait_stability: number | null;
};
export type DashboardMinAggregateOutputType = {
    id: string | null;
    fog_episodes_today: number | null;
    avg_lead_time: number | null;
    steps_today: bigint | null;
    gait_stability: number | null;
    cues_triggered: string | null;
    user_id: string | null;
    created_at: Date | null;
};
export type DashboardMaxAggregateOutputType = {
    id: string | null;
    fog_episodes_today: number | null;
    avg_lead_time: number | null;
    steps_today: bigint | null;
    gait_stability: number | null;
    cues_triggered: string | null;
    user_id: string | null;
    created_at: Date | null;
};
export type DashboardCountAggregateOutputType = {
    id: number;
    fog_episodes_today: number;
    avg_lead_time: number;
    steps_today: number;
    gait_stability: number;
    cues_triggered: number;
    user_id: number;
    created_at: number;
    _all: number;
};
export type DashboardAvgAggregateInputType = {
    fog_episodes_today?: true;
    avg_lead_time?: true;
    steps_today?: true;
    gait_stability?: true;
};
export type DashboardSumAggregateInputType = {
    fog_episodes_today?: true;
    avg_lead_time?: true;
    steps_today?: true;
    gait_stability?: true;
};
export type DashboardMinAggregateInputType = {
    id?: true;
    fog_episodes_today?: true;
    avg_lead_time?: true;
    steps_today?: true;
    gait_stability?: true;
    cues_triggered?: true;
    user_id?: true;
    created_at?: true;
};
export type DashboardMaxAggregateInputType = {
    id?: true;
    fog_episodes_today?: true;
    avg_lead_time?: true;
    steps_today?: true;
    gait_stability?: true;
    cues_triggered?: true;
    user_id?: true;
    created_at?: true;
};
export type DashboardCountAggregateInputType = {
    id?: true;
    fog_episodes_today?: true;
    avg_lead_time?: true;
    steps_today?: true;
    gait_stability?: true;
    cues_triggered?: true;
    user_id?: true;
    created_at?: true;
    _all?: true;
};
export type DashboardAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dashboard to aggregate.
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dashboards to fetch.
     */
    orderBy?: Prisma.dashboardOrderByWithRelationInput | Prisma.dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned dashboards
    **/
    _count?: true | DashboardCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: DashboardAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: DashboardSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: DashboardMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: DashboardMaxAggregateInputType;
};
export type GetDashboardAggregateType<T extends DashboardAggregateArgs> = {
    [P in keyof T & keyof AggregateDashboard]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDashboard[P]> : Prisma.GetScalarType<T[P], AggregateDashboard[P]>;
};
export type dashboardGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.dashboardWhereInput;
    orderBy?: Prisma.dashboardOrderByWithAggregationInput | Prisma.dashboardOrderByWithAggregationInput[];
    by: Prisma.DashboardScalarFieldEnum[] | Prisma.DashboardScalarFieldEnum;
    having?: Prisma.dashboardScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DashboardCountAggregateInputType | true;
    _avg?: DashboardAvgAggregateInputType;
    _sum?: DashboardSumAggregateInputType;
    _min?: DashboardMinAggregateInputType;
    _max?: DashboardMaxAggregateInputType;
};
export type DashboardGroupByOutputType = {
    id: string;
    fog_episodes_today: number | null;
    avg_lead_time: number | null;
    steps_today: bigint | null;
    gait_stability: number | null;
    cues_triggered: string | null;
    user_id: string;
    created_at: Date;
    _count: DashboardCountAggregateOutputType | null;
    _avg: DashboardAvgAggregateOutputType | null;
    _sum: DashboardSumAggregateOutputType | null;
    _min: DashboardMinAggregateOutputType | null;
    _max: DashboardMaxAggregateOutputType | null;
};
export type GetDashboardGroupByPayload<T extends dashboardGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DashboardGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DashboardGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DashboardGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DashboardGroupByOutputType[P]>;
}>>;
export type dashboardWhereInput = {
    AND?: Prisma.dashboardWhereInput | Prisma.dashboardWhereInput[];
    OR?: Prisma.dashboardWhereInput[];
    NOT?: Prisma.dashboardWhereInput | Prisma.dashboardWhereInput[];
    id?: Prisma.StringFilter<"dashboard"> | string;
    fog_episodes_today?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    avg_lead_time?: Prisma.FloatNullableFilter<"dashboard"> | number | null;
    steps_today?: Prisma.BigIntNullableFilter<"dashboard"> | bigint | number | null;
    gait_stability?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    cues_triggered?: Prisma.StringNullableFilter<"dashboard"> | string | null;
    user_id?: Prisma.StringFilter<"dashboard"> | string;
    created_at?: Prisma.DateTimeFilter<"dashboard"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
};
export type dashboardOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fog_episodes_today?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    steps_today?: Prisma.SortOrderInput | Prisma.SortOrder;
    gait_stability?: Prisma.SortOrderInput | Prisma.SortOrder;
    cues_triggered?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.userOrderByWithRelationInput;
};
export type dashboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    user_id?: string;
    AND?: Prisma.dashboardWhereInput | Prisma.dashboardWhereInput[];
    OR?: Prisma.dashboardWhereInput[];
    NOT?: Prisma.dashboardWhereInput | Prisma.dashboardWhereInput[];
    fog_episodes_today?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    avg_lead_time?: Prisma.FloatNullableFilter<"dashboard"> | number | null;
    steps_today?: Prisma.BigIntNullableFilter<"dashboard"> | bigint | number | null;
    gait_stability?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    cues_triggered?: Prisma.StringNullableFilter<"dashboard"> | string | null;
    created_at?: Prisma.DateTimeFilter<"dashboard"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.userWhereInput>;
}, "id" | "user_id">;
export type dashboardOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fog_episodes_today?: Prisma.SortOrderInput | Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    steps_today?: Prisma.SortOrderInput | Prisma.SortOrder;
    gait_stability?: Prisma.SortOrderInput | Prisma.SortOrder;
    cues_triggered?: Prisma.SortOrderInput | Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.dashboardCountOrderByAggregateInput;
    _avg?: Prisma.dashboardAvgOrderByAggregateInput;
    _max?: Prisma.dashboardMaxOrderByAggregateInput;
    _min?: Prisma.dashboardMinOrderByAggregateInput;
    _sum?: Prisma.dashboardSumOrderByAggregateInput;
};
export type dashboardScalarWhereWithAggregatesInput = {
    AND?: Prisma.dashboardScalarWhereWithAggregatesInput | Prisma.dashboardScalarWhereWithAggregatesInput[];
    OR?: Prisma.dashboardScalarWhereWithAggregatesInput[];
    NOT?: Prisma.dashboardScalarWhereWithAggregatesInput | Prisma.dashboardScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"dashboard"> | string;
    fog_episodes_today?: Prisma.IntNullableWithAggregatesFilter<"dashboard"> | number | null;
    avg_lead_time?: Prisma.FloatNullableWithAggregatesFilter<"dashboard"> | number | null;
    steps_today?: Prisma.BigIntNullableWithAggregatesFilter<"dashboard"> | bigint | number | null;
    gait_stability?: Prisma.IntNullableWithAggregatesFilter<"dashboard"> | number | null;
    cues_triggered?: Prisma.StringNullableWithAggregatesFilter<"dashboard"> | string | null;
    user_id?: Prisma.StringWithAggregatesFilter<"dashboard"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"dashboard"> | Date | string;
};
export type dashboardCreateInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    created_at?: Date | string;
    user: Prisma.userCreateNestedOneWithoutDashboard_sessionsInput;
};
export type dashboardUncheckedCreateInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    user_id: string;
    created_at?: Date | string;
};
export type dashboardUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.userUpdateOneRequiredWithoutDashboard_sessionsNestedInput;
};
export type dashboardUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dashboardCreateManyInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    user_id: string;
    created_at?: Date | string;
};
export type dashboardUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dashboardUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DashboardListRelationFilter = {
    every?: Prisma.dashboardWhereInput;
    some?: Prisma.dashboardWhereInput;
    none?: Prisma.dashboardWhereInput;
};
export type dashboardOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type dashboardCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fog_episodes_today?: Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrder;
    steps_today?: Prisma.SortOrder;
    gait_stability?: Prisma.SortOrder;
    cues_triggered?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dashboardAvgOrderByAggregateInput = {
    fog_episodes_today?: Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrder;
    steps_today?: Prisma.SortOrder;
    gait_stability?: Prisma.SortOrder;
};
export type dashboardMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fog_episodes_today?: Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrder;
    steps_today?: Prisma.SortOrder;
    gait_stability?: Prisma.SortOrder;
    cues_triggered?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dashboardMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fog_episodes_today?: Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrder;
    steps_today?: Prisma.SortOrder;
    gait_stability?: Prisma.SortOrder;
    cues_triggered?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type dashboardSumOrderByAggregateInput = {
    fog_episodes_today?: Prisma.SortOrder;
    avg_lead_time?: Prisma.SortOrder;
    steps_today?: Prisma.SortOrder;
    gait_stability?: Prisma.SortOrder;
};
export type dashboardCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput> | Prisma.dashboardCreateWithoutUserInput[] | Prisma.dashboardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.dashboardCreateOrConnectWithoutUserInput | Prisma.dashboardCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.dashboardCreateManyUserInputEnvelope;
    connect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
};
export type dashboardUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput> | Prisma.dashboardCreateWithoutUserInput[] | Prisma.dashboardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.dashboardCreateOrConnectWithoutUserInput | Prisma.dashboardCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.dashboardCreateManyUserInputEnvelope;
    connect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
};
export type dashboardUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput> | Prisma.dashboardCreateWithoutUserInput[] | Prisma.dashboardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.dashboardCreateOrConnectWithoutUserInput | Prisma.dashboardCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.dashboardUpsertWithWhereUniqueWithoutUserInput | Prisma.dashboardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.dashboardCreateManyUserInputEnvelope;
    set?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    disconnect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    delete?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    connect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    update?: Prisma.dashboardUpdateWithWhereUniqueWithoutUserInput | Prisma.dashboardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.dashboardUpdateManyWithWhereWithoutUserInput | Prisma.dashboardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.dashboardScalarWhereInput | Prisma.dashboardScalarWhereInput[];
};
export type dashboardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput> | Prisma.dashboardCreateWithoutUserInput[] | Prisma.dashboardUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.dashboardCreateOrConnectWithoutUserInput | Prisma.dashboardCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.dashboardUpsertWithWhereUniqueWithoutUserInput | Prisma.dashboardUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.dashboardCreateManyUserInputEnvelope;
    set?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    disconnect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    delete?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    connect?: Prisma.dashboardWhereUniqueInput | Prisma.dashboardWhereUniqueInput[];
    update?: Prisma.dashboardUpdateWithWhereUniqueWithoutUserInput | Prisma.dashboardUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.dashboardUpdateManyWithWhereWithoutUserInput | Prisma.dashboardUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.dashboardScalarWhereInput | Prisma.dashboardScalarWhereInput[];
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null;
    increment?: bigint | number;
    decrement?: bigint | number;
    multiply?: bigint | number;
    divide?: bigint | number;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type dashboardCreateWithoutUserInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    created_at?: Date | string;
};
export type dashboardUncheckedCreateWithoutUserInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    created_at?: Date | string;
};
export type dashboardCreateOrConnectWithoutUserInput = {
    where: Prisma.dashboardWhereUniqueInput;
    create: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput>;
};
export type dashboardCreateManyUserInputEnvelope = {
    data: Prisma.dashboardCreateManyUserInput | Prisma.dashboardCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type dashboardUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.dashboardWhereUniqueInput;
    update: Prisma.XOR<Prisma.dashboardUpdateWithoutUserInput, Prisma.dashboardUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.dashboardCreateWithoutUserInput, Prisma.dashboardUncheckedCreateWithoutUserInput>;
};
export type dashboardUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.dashboardWhereUniqueInput;
    data: Prisma.XOR<Prisma.dashboardUpdateWithoutUserInput, Prisma.dashboardUncheckedUpdateWithoutUserInput>;
};
export type dashboardUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.dashboardScalarWhereInput;
    data: Prisma.XOR<Prisma.dashboardUpdateManyMutationInput, Prisma.dashboardUncheckedUpdateManyWithoutUserInput>;
};
export type dashboardScalarWhereInput = {
    AND?: Prisma.dashboardScalarWhereInput | Prisma.dashboardScalarWhereInput[];
    OR?: Prisma.dashboardScalarWhereInput[];
    NOT?: Prisma.dashboardScalarWhereInput | Prisma.dashboardScalarWhereInput[];
    id?: Prisma.StringFilter<"dashboard"> | string;
    fog_episodes_today?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    avg_lead_time?: Prisma.FloatNullableFilter<"dashboard"> | number | null;
    steps_today?: Prisma.BigIntNullableFilter<"dashboard"> | bigint | number | null;
    gait_stability?: Prisma.IntNullableFilter<"dashboard"> | number | null;
    cues_triggered?: Prisma.StringNullableFilter<"dashboard"> | string | null;
    user_id?: Prisma.StringFilter<"dashboard"> | string;
    created_at?: Prisma.DateTimeFilter<"dashboard"> | Date | string;
};
export type dashboardCreateManyUserInput = {
    id?: string;
    fog_episodes_today?: number | null;
    avg_lead_time?: number | null;
    steps_today?: bigint | number | null;
    gait_stability?: number | null;
    cues_triggered?: string | null;
    created_at?: Date | string;
};
export type dashboardUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dashboardUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dashboardUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    fog_episodes_today?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    avg_lead_time?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    steps_today?: Prisma.NullableBigIntFieldUpdateOperationsInput | bigint | number | null;
    gait_stability?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    cues_triggered?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type dashboardSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fog_episodes_today?: boolean;
    avg_lead_time?: boolean;
    steps_today?: boolean;
    gait_stability?: boolean;
    cues_triggered?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboard"]>;
export type dashboardSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fog_episodes_today?: boolean;
    avg_lead_time?: boolean;
    steps_today?: boolean;
    gait_stability?: boolean;
    cues_triggered?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboard"]>;
export type dashboardSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fog_episodes_today?: boolean;
    avg_lead_time?: boolean;
    steps_today?: boolean;
    gait_stability?: boolean;
    cues_triggered?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["dashboard"]>;
export type dashboardSelectScalar = {
    id?: boolean;
    fog_episodes_today?: boolean;
    avg_lead_time?: boolean;
    steps_today?: boolean;
    gait_stability?: boolean;
    cues_triggered?: boolean;
    user_id?: boolean;
    created_at?: boolean;
};
export type dashboardOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fog_episodes_today" | "avg_lead_time" | "steps_today" | "gait_stability" | "cues_triggered" | "user_id" | "created_at", ExtArgs["result"]["dashboard"]>;
export type dashboardInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type dashboardIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type dashboardIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.userDefaultArgs<ExtArgs>;
};
export type $dashboardPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "dashboard";
    objects: {
        user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        fog_episodes_today: number | null;
        avg_lead_time: number | null;
        steps_today: bigint | null;
        gait_stability: number | null;
        cues_triggered: string | null;
        user_id: string;
        created_at: Date;
    }, ExtArgs["result"]["dashboard"]>;
    composites: {};
};
export type dashboardGetPayload<S extends boolean | null | undefined | dashboardDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$dashboardPayload, S>;
export type dashboardCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<dashboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DashboardCountAggregateInputType | true;
};
export interface dashboardDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['dashboard'];
        meta: {
            name: 'dashboard';
        };
    };
    /**
     * Find zero or one Dashboard that matches the filter.
     * @param {dashboardFindUniqueArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dashboardFindUniqueArgs>(args: Prisma.SelectSubset<T, dashboardFindUniqueArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Dashboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {dashboardFindUniqueOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dashboardFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, dashboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dashboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardFindFirstArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dashboardFindFirstArgs>(args?: Prisma.SelectSubset<T, dashboardFindFirstArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Dashboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardFindFirstOrThrowArgs} args - Arguments to find a Dashboard
     * @example
     * // Get one Dashboard
     * const dashboard = await prisma.dashboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dashboardFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, dashboardFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Dashboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dashboards
     * const dashboards = await prisma.dashboard.findMany()
     *
     * // Get first 10 Dashboards
     * const dashboards = await prisma.dashboard.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.findMany({ select: { id: true } })
     *
     */
    findMany<T extends dashboardFindManyArgs>(args?: Prisma.SelectSubset<T, dashboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Dashboard.
     * @param {dashboardCreateArgs} args - Arguments to create a Dashboard.
     * @example
     * // Create one Dashboard
     * const Dashboard = await prisma.dashboard.create({
     *   data: {
     *     // ... data to create a Dashboard
     *   }
     * })
     *
     */
    create<T extends dashboardCreateArgs>(args: Prisma.SelectSubset<T, dashboardCreateArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Dashboards.
     * @param {dashboardCreateManyArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends dashboardCreateManyArgs>(args?: Prisma.SelectSubset<T, dashboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Dashboards and returns the data saved in the database.
     * @param {dashboardCreateManyAndReturnArgs} args - Arguments to create many Dashboards.
     * @example
     * // Create many Dashboards
     * const dashboard = await prisma.dashboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends dashboardCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, dashboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Dashboard.
     * @param {dashboardDeleteArgs} args - Arguments to delete one Dashboard.
     * @example
     * // Delete one Dashboard
     * const Dashboard = await prisma.dashboard.delete({
     *   where: {
     *     // ... filter to delete one Dashboard
     *   }
     * })
     *
     */
    delete<T extends dashboardDeleteArgs>(args: Prisma.SelectSubset<T, dashboardDeleteArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Dashboard.
     * @param {dashboardUpdateArgs} args - Arguments to update one Dashboard.
     * @example
     * // Update one Dashboard
     * const dashboard = await prisma.dashboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends dashboardUpdateArgs>(args: Prisma.SelectSubset<T, dashboardUpdateArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Dashboards.
     * @param {dashboardDeleteManyArgs} args - Arguments to filter Dashboards to delete.
     * @example
     * // Delete a few Dashboards
     * const { count } = await prisma.dashboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends dashboardDeleteManyArgs>(args?: Prisma.SelectSubset<T, dashboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends dashboardUpdateManyArgs>(args: Prisma.SelectSubset<T, dashboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Dashboards and returns the data updated in the database.
     * @param {dashboardUpdateManyAndReturnArgs} args - Arguments to update many Dashboards.
     * @example
     * // Update many Dashboards
     * const dashboard = await prisma.dashboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Dashboards and only return the `id`
     * const dashboardWithIdOnly = await prisma.dashboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends dashboardUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, dashboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Dashboard.
     * @param {dashboardUpsertArgs} args - Arguments to update or create a Dashboard.
     * @example
     * // Update or create a Dashboard
     * const dashboard = await prisma.dashboard.upsert({
     *   create: {
     *     // ... data to create a Dashboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dashboard we want to update
     *   }
     * })
     */
    upsert<T extends dashboardUpsertArgs>(args: Prisma.SelectSubset<T, dashboardUpsertArgs<ExtArgs>>): Prisma.Prisma__dashboardClient<runtime.Types.Result.GetResult<Prisma.$dashboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Dashboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardCountArgs} args - Arguments to filter Dashboards to count.
     * @example
     * // Count the number of Dashboards
     * const count = await prisma.dashboard.count({
     *   where: {
     *     // ... the filter for the Dashboards we want to count
     *   }
     * })
    **/
    count<T extends dashboardCountArgs>(args?: Prisma.Subset<T, dashboardCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DashboardCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DashboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DashboardAggregateArgs>(args: Prisma.Subset<T, DashboardAggregateArgs>): Prisma.PrismaPromise<GetDashboardAggregateType<T>>;
    /**
     * Group by Dashboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dashboardGroupByArgs} args - Group by arguments.
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
    groupBy<T extends dashboardGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: dashboardGroupByArgs['orderBy'];
    } : {
        orderBy?: dashboardGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, dashboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDashboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the dashboard model
     */
    readonly fields: dashboardFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for dashboard.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__dashboardClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
 * Fields of the dashboard model
 */
export interface dashboardFieldRefs {
    readonly id: Prisma.FieldRef<"dashboard", 'String'>;
    readonly fog_episodes_today: Prisma.FieldRef<"dashboard", 'Int'>;
    readonly avg_lead_time: Prisma.FieldRef<"dashboard", 'Float'>;
    readonly steps_today: Prisma.FieldRef<"dashboard", 'BigInt'>;
    readonly gait_stability: Prisma.FieldRef<"dashboard", 'Int'>;
    readonly cues_triggered: Prisma.FieldRef<"dashboard", 'String'>;
    readonly user_id: Prisma.FieldRef<"dashboard", 'String'>;
    readonly created_at: Prisma.FieldRef<"dashboard", 'DateTime'>;
}
/**
 * dashboard findUnique
 */
export type dashboardFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which dashboard to fetch.
     */
    where: Prisma.dashboardWhereUniqueInput;
};
/**
 * dashboard findUniqueOrThrow
 */
export type dashboardFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which dashboard to fetch.
     */
    where: Prisma.dashboardWhereUniqueInput;
};
/**
 * dashboard findFirst
 */
export type dashboardFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which dashboard to fetch.
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dashboards to fetch.
     */
    orderBy?: Prisma.dashboardOrderByWithRelationInput | Prisma.dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dashboards.
     */
    cursor?: Prisma.dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dashboards.
     */
    distinct?: Prisma.DashboardScalarFieldEnum | Prisma.DashboardScalarFieldEnum[];
};
/**
 * dashboard findFirstOrThrow
 */
export type dashboardFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which dashboard to fetch.
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dashboards to fetch.
     */
    orderBy?: Prisma.dashboardOrderByWithRelationInput | Prisma.dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for dashboards.
     */
    cursor?: Prisma.dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dashboards.
     */
    distinct?: Prisma.DashboardScalarFieldEnum | Prisma.DashboardScalarFieldEnum[];
};
/**
 * dashboard findMany
 */
export type dashboardFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter, which dashboards to fetch.
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of dashboards to fetch.
     */
    orderBy?: Prisma.dashboardOrderByWithRelationInput | Prisma.dashboardOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing dashboards.
     */
    cursor?: Prisma.dashboardWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` dashboards from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` dashboards.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of dashboards.
     */
    distinct?: Prisma.DashboardScalarFieldEnum | Prisma.DashboardScalarFieldEnum[];
};
/**
 * dashboard create
 */
export type dashboardCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * The data needed to create a dashboard.
     */
    data: Prisma.XOR<Prisma.dashboardCreateInput, Prisma.dashboardUncheckedCreateInput>;
};
/**
 * dashboard createMany
 */
export type dashboardCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many dashboards.
     */
    data: Prisma.dashboardCreateManyInput | Prisma.dashboardCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * dashboard createManyAndReturn
 */
export type dashboardCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * The data used to create many dashboards.
     */
    data: Prisma.dashboardCreateManyInput | Prisma.dashboardCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * dashboard update
 */
export type dashboardUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * The data needed to update a dashboard.
     */
    data: Prisma.XOR<Prisma.dashboardUpdateInput, Prisma.dashboardUncheckedUpdateInput>;
    /**
     * Choose, which dashboard to update.
     */
    where: Prisma.dashboardWhereUniqueInput;
};
/**
 * dashboard updateMany
 */
export type dashboardUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update dashboards.
     */
    data: Prisma.XOR<Prisma.dashboardUpdateManyMutationInput, Prisma.dashboardUncheckedUpdateManyInput>;
    /**
     * Filter which dashboards to update
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * Limit how many dashboards to update.
     */
    limit?: number;
};
/**
 * dashboard updateManyAndReturn
 */
export type dashboardUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * The data used to update dashboards.
     */
    data: Prisma.XOR<Prisma.dashboardUpdateManyMutationInput, Prisma.dashboardUncheckedUpdateManyInput>;
    /**
     * Filter which dashboards to update
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * Limit how many dashboards to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * dashboard upsert
 */
export type dashboardUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * The filter to search for the dashboard to update in case it exists.
     */
    where: Prisma.dashboardWhereUniqueInput;
    /**
     * In case the dashboard found by the `where` argument doesn't exist, create a new dashboard with this data.
     */
    create: Prisma.XOR<Prisma.dashboardCreateInput, Prisma.dashboardUncheckedCreateInput>;
    /**
     * In case the dashboard was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.dashboardUpdateInput, Prisma.dashboardUncheckedUpdateInput>;
};
/**
 * dashboard delete
 */
export type dashboardDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
    /**
     * Filter which dashboard to delete.
     */
    where: Prisma.dashboardWhereUniqueInput;
};
/**
 * dashboard deleteMany
 */
export type dashboardDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which dashboards to delete
     */
    where?: Prisma.dashboardWhereInput;
    /**
     * Limit how many dashboards to delete.
     */
    limit?: number;
};
/**
 * dashboard without action
 */
export type dashboardDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dashboard
     */
    select?: Prisma.dashboardSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the dashboard
     */
    omit?: Prisma.dashboardOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.dashboardInclude<ExtArgs> | null;
};
//# sourceMappingURL=dashboard.d.ts.map